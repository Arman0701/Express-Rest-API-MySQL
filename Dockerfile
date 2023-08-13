FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

# RUN apt-get update && apt-get install -y mysql-client
RUN sudo apt-get update && apt-get install -y mysql-client mysql-server

RUN service mysql start

# RUN service mysql start && \
#     mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'root_password';" && \
#     mysql -e "CREATE DATABASE your_database_name;"

COPY . .

EXPOSE 3000 3300

CMD ["node", "index.js"]