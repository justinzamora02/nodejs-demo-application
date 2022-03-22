ARG BASE_IMAGE=node:current-alpine
FROM $BASE_IMAGE

ARG USER=demo
ENV NODE_ENV=production

RUN adduser -D $USER

COPY ["yarn.lock", "package.json", "./"] .

RUN yarn install --prod --frozen-lockfile && \
  yarn cache clean
  
COPY . .

EXPOSE 3000

USER $USER

CMD ["node", "src/index.js"]