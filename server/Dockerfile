FROM node:18-alpine AS builder
RUN npm i -g nodemon
# Create app directory
WORKDIR /home/node/src

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
COPY config ./config/
COPY . .

# Install app dependencies
RUN npm install
RUN apk add --no-cache bash


RUN npm ci

FROM node:18-alpine
RUN apk add --update nodejs

RUN mkdir /home/node/src/

COPY --from=builder /home/node/src/ ./home/node/src/

WORKDIR /home/node/src

CMD ["npm", "start" ]