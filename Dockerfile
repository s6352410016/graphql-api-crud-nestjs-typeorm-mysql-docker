FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i 

COPY . .

EXPOSE 5000

CMD ["npm" , "run" , "start:dev"]