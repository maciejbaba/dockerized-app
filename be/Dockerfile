FROM node:latest

WORKDIR /backend

COPY package.json package-lock.json /backend
RUN npm install

COPY . /backend

EXPOSE 3000

CMD ["node", "server.js"]

