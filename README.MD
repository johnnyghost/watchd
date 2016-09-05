# React redux boilerplate

[wip]

`npm run start`    
`npm run production`

## Environment configuration
You should create a configuration per environment inside the config folder.
The files should be named  `config.prod.js` and `config.dev.js`

```js

const config = {
  ENV: 'ENV', // environment: DEV,PROD
  CLIENTS: {
    TMDB: {
      baseUrl: 'https/api.themoviedb.org',
      version: 3,
      apiKey: <API_KEY>
    }
  }
};

```
