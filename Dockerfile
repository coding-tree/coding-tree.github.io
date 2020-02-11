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

FROM node:10.17.0
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/start.sh .
RUN npm install -g serve
EXPOSE 80
RUN chmod +x ./start.sh

CMD ["./start.sh"]
