FROM node:latest

WORKDIR /de
COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

