FROM ubuntu:20.04
WORKDIR /app

# Install Node JS
RUN apt update
RUN apt upgrade
RUN apt -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs

# Install MySQL Server
RUN apt update
RUN apt install mysql-server -y
RUN service mysql start
RUN service mysql start

COPY package.json package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD npm start