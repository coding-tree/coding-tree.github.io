FROM node:10.17.0
WORKDIR /app
ADD . .
RUN npm install
RUN npm run build
RUN npm install -g serve
WORKDIR /app
EXPOSE 80
RUN chmod +x ./start.sh

CMD ["./start.sh"]
