FROM node:alpine
WORKDIR /code
COPY ./ ./
RUN npm install
EXPOSE 2400
CMD ["node","balancer.js"]
