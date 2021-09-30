FROM node:14.18.0-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.15.2-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]