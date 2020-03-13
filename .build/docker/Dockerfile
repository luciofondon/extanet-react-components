FROM node:10-alpine

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node package.json /usr/src/app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN npm set progress=false && npm install

# Make port 6006 available
EXPOSE 6006

# run storybook app
CMD ["npm", "run", "build:dev"]