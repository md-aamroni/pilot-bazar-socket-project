FROM alpine:3.20

ENV NODE_VERSION 20.17.0

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "node" ]