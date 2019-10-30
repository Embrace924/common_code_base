FROM nginx:1.15-alpine
COPY nginx/h5bp/ /etc/nginx/h5bp/
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY dist/ /usr/share/nginx/html/
CMD nginx -g "daemon off;"
EXPOSE 80
