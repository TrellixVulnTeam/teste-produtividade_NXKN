require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Conexão estabelecida com sucesso na porta ${PORT}`)
});

module.exports = app;