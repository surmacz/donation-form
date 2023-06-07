# Only for DEMO purposes

## To run the project locally

- `npm ci`
- `npm run dev`

## Prepared on:

- Node 18.14.0
- NPM 9.3.1
- Chrome 109

## Run the project using Docker

- `npm ci`
- `docker run -it --rm -p 3000:3000 --name donation-form0 -v "$PWD":/usr/src/app -w /usr/src/app node:18.14 npm run dev`
