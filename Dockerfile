FROM node:18

# Set the timezone to Nairobi
ENV TZ=Africa/Nairobi

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD ["npm","run","dev"]
