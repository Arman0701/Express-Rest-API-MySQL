# FROM node

# WORKDIR /app

# COPY package.json /app

# RUN npm install

# COPY . .

# EXPOSE 3000 3300

# CMD ["node", "index.js"]

FROM ubuntu:20.04
WORKDIR /app

RUN apt update
RUN apt upgrade
RUN apt -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN  apt install -y nodejs

COPY package.json package-lock.json ./
RUN npm install
COPY . .


CMD npm start