FROM node:lts-bullseye-slim 

WORKDIR /app 

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev"]
  