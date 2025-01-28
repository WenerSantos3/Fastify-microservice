FROM nginx:1.24.0-alpine

RUN apk update && apk upgrade

RUN apk add curl

RUN rm -rf /etc/nginx

COPY resources/nginx/ /etc/nginx

COPY resources/nginx/mine.types /etc/nginx/mime.types

COPY resources/nginx/local_nginx.conf /etc/nginx/nginx.conf
