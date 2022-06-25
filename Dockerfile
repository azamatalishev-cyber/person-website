FROM node:17.4.0

WORKDIR /app

RUN npm install -g npm@8.12.2

COPY . ./

RUN npm install -g serve

CMD ["serve","-s", "build"]
