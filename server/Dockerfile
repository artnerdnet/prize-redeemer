FROM node:18

WORKDIR /usr/src/
ENV NODE_ENV development

COPY package*.json ./
COPY ./src src
COPY ./prisma prisma
COPY ./config config

RUN yarn

COPY . .

CMD ["yarn", "start"]