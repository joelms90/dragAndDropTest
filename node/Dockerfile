FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . . 
RUN ls -a

EXPOSE 3000
CMD ["npm","run","dev","--host"]


