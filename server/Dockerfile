FROM node:20-alpine

RUN mkdir -p /server

WORKDIR /server

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3001

CMD ["npm", "start"]