FROM node:18 as development

WORKDIR /usr/src/app
ENV NODE_ENV development

COPY package*.json ./
COPY ./src src
COPY ./prisma prisma
COPY ./config config

RUN yarn
RUN yarn build

COPY . .

CMD ["yarn", "start"]