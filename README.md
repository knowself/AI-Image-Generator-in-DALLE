# AI-Image-Generator-in-DALLE

This was built by watching the excellent video tutorial by Brad Traversy at [Traversy Media](https://youtu.be/fU4o_BKaUZE)

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/img/img-y9gZdenEtjbYfME5i5EOFDV5.png" width="500">

## Usage

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file with the key "OPENAI_API_KEY"

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:5555` in your browser.

The endpoint is at `POST http://localhost:5555/openai/generateimage`.
