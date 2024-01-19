const express = require('express');
const cors = require('cors');
const routes = require("./routes/index.js")
const migrationsRun = require("./database/sqlite/migrations")

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes)

migrationsRun();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

