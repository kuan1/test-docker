FROM node:10.14.2-Alpine
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD [ "npm", "start" ]