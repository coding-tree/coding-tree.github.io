FROM node:10.17.0 AS dependencies
WORKDIR /app
ADD package.json .
ADD package-lock.json .
RUN npm install

FROM node:10.17.0 AS builder
ARG git_branch
ARG git_commit

WORKDIR /app

ADD package.json .
ADD package-lock.json .
COPY --from=dependencies /app/node_modules /app/node_modules

ADD src src
ADD public public
ENV REACT_APP_GIT_BRANCH=${git_branch}
ENV REACT_APP_GIT_COMMIT=${git_commit}
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
