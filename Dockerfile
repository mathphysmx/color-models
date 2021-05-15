FROM alpine

# Install NodeJS and npm
RUN apk add --update nodejs npm

# For nodejs `require` to work in client/browser side
RUN npm install -g browserify

#install required packages
RUN npm install color

CMD ["echo", "Hello StackOverflow!"]