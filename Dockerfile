FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html

EXPOSE 2192
