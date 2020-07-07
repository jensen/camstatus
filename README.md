## ClimaCell

A free account from [ClimaCell](https://www.climacell.co/) provides 1000/requests per day. The API key needs to be included as an environment variable when the application runs. During development the easiest way to setup the key is to add a `.env` file that includes `WEATHER_API_KEY=` with a valid key assigned.

## Without Docker

### Install Deno

- [Deno](https://deno.land/#installation)

### Run Application

`deno run --allow-env --allow-net --allow-read src/main.ts`

## With Docker

## Build and Run

Using the `bin/build` and `bin/run` commands.

## Accessing The Overlay

Point a browser to `http://localhost:8000/:city` with city being one that is supported:

- vancouver
- calgary
- ottawa
- toronto
- montreal