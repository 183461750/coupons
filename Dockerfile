FROM nginx:mainline-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf *
ADD ./code .
ADD ./build/nginx/conf.d/default.conf /etc/nginx/conf.d/
EXPOSE 80
