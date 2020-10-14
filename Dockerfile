FROM node:alpine

WORKDIR /app

COPY app/package.json /app

RUN npm install

COPY app/ /app

CMD node app.js

EXPOSE 3000