FROM node:10.17.0 AS builder
ARG git_branch
ARG git_commit

WORKDIR /app
ADD package.json .
ADD package-lock.json .
RUN npm install

ADD . .
ENV REACT_APP_GIT_BRANCH=${git_branch}
ENV REACT_APP_GIT_COMMIT=${git_commit}
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
