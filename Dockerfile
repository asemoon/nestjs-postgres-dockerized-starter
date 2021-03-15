FROM node:14.16.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:14.16.0-alpine as production

WORKDIR /usr/src/app

# Adding this beacse we need bash to start the server in production but alpine does not come with bash
RUN apk add --no-cache bash

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["/bin/bash", "startup.sh"]