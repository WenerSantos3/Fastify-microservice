FROM node:22-alpine

RUN apk add curl supervisor

# RUN rm -rf /etc/nginx

COPY ./resources/supervisor /etc/supervisor

# COPY ./resources/nginx /etc/nginx

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["supervisord", "--nodaemon", "--configuration", "/etc/supervisor/supervisord.conf"]