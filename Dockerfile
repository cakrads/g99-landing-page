##### Deps #####
# Use the official Node.js image as a base image
FROM node:20-alpine AS deps

# get ARGS_NODE_ENV from script runner 
ARG ARGS_NODE_ENV

# This line sets an environment variable to disable Babel's cache during the build process.
ENV BABEL_DISABLE_CACHE=1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# switches the user to root for the subsequent commands.
USER root

# Install project dependencies
RUN npm install


##### Builder #####
FROM node:20-alpine AS builder

# get ARGS_NODE_ENV from script runner 
ARG ARGS_NODE_ENV

# This line sets an environment variable to disable Babel's cache during the build process.
ENV BABEL_DISABLE_CACHE=1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy project to the working directory
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY .env .env
COPY . .

# switches the user to root for the subsequent commands.
USER root

# Install project dependencies
RUN npm run build:${ARGS_NODE_ENV}


##### Runner #####
FROM node:20-alpine AS runner

# Define a non-root user
RUN adduser -D user

# switches the user to root for the subsequent commands.
USER root

# get ARGS_NODE_ENV from script runner 
ARG ARGS_NODE_ENV

# This line sets an environment variable to disable Babel's cache during the build process.
ENV BABEL_DISABLE_CACHE=1

#  sets an environment variable named DD_VERSION with the value of the SCM_COMMIT_ID argument.
ARG SCM_COMMIT_ID
ENV DD_VERSION=${SCM_COMMIT_ID}

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY --from=builder --chown=user:nogroup /usr/src/app/.env ./.env
COPY --from=builder --chown=user:nogroup /usr/src/app/next.config.js ./next.config.js
COPY --from=builder --chown=user:nogroup /usr/src/app/public ./public
COPY --from=builder --chown=user:nogroup /usr/src/app/.next ./.next
COPY --from=builder --chown=user:nogroup /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=user:nogroup /usr/src/app/package.json ./package.json

# Copy storybook-static to /public/storybook, so it can access by BASE_URL/storybook
# COPY --from=builder --chown=user:nogroup /usr/src/app/storybook-static ./public/storybook

# next image cache (sharp) using tmpfs
RUN mkdir -p /tmp/next-images-cache \
  && chmod -R 777 /tmp/next-images-cache \
  && ln -sf /tmp/next-images-cache .next/cache/images

# run the application with a lower level of permissions, 
# reducing the risk associated with running the application as the root user.
USER user

# Expose the port on which Next.js will run
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "start"]
