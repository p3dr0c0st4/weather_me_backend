FROM node:16-alpine as backend
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD [ "node", "index.js" ]

#docker build . -t weathermebackend:latest
#docker run -p 3000:3000 -d weathermebackend:latest
#docker system prune