# build environment
FROM node:8.9.0 as builder

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# Expose PORT 80 on our virtual machine so we can run our server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]