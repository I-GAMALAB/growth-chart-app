FROM node:16-alpine
RUN apk --update --no-cache add curl
ENV NODE_PATH=./src
WORKDIR /var/www/app/api

COPY . /var/www/app/api

RUN npm ci --quiet --only=production

EXPOSE 3000

CMD ["node", "bin/www"]
