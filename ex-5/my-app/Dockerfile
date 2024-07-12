#Stage 1 - build the react app
FROM node:slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

#Stage 2 - deploy app in nginx
FROM nginx:alpine AS server

# Copy files from previous build
COPY --from=build /app/build /usr/share/nginx/html

COPY ./conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

