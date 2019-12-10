FROM node:8.6-alpine
 
RUN mkdir -p /usr/src/numero-por-extenso-api
WORKDIR /usr/src/numero-por-extenso-api
 
COPY ./numero-por-extenso /usr/src/numero-por-extenso
COPY ./numero-por-extenso-api /usr/src/numero-por-extenso-api

RUN cd /usr/src/numero-por-extenso-api && npm install
 
EXPOSE 3000
CMD ["npm", "start"]
