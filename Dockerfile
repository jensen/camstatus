FROM debian:stable-20200327-slim as deno

ENV DENO_VERSION=1.1.3
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -qq update \
    && apt-get upgrade -y -o Dpkg::Options::="--force-confold" \
    && apt-get -qq install -y ca-certificates curl unzip --no-install-recommends \
    && curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
    --output deno.zip \
    && unzip deno.zip \
    && rm deno.zip \
    && chmod 777 deno \
    && mv deno /usr/bin/deno \
    && apt-get -qq remove -y ca-certificates curl unzip \
    && apt-get -y -qq autoremove \
    && apt-get -qq clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN useradd --uid 8000 --user-group deno \
    && mkdir /deno-dir/ \
    && chown deno:deno /deno-dir/

ENV DENO_DIR /deno-dir/

FROM deno

EXPOSE 8000

WORKDIR /app

USER deno

ADD . .
RUN deno cache src/main.ts

CMD ["deno", "run", "--allow-env", "--allow-read", "--allow-net", "src/main.ts"]