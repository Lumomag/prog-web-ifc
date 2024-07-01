const express = require('express');
const cors = require('cors');
const { getDatabaseInstance } = require('./database.js');

const app = express();

async function main() {
  app.use(express.json());
  app.use(express.static('public'));

  app.use(
    cors({
      origin: '*',
    })
  );

  app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });

  app.get('/tarefas', async function (req, res) {
    const db = await getDatabaseInstance();
    const result = await db.all(`SELECT * FROM todo`);
    res.send(result);
  });

  app.post('/tarefas', async function (req, res) {
    const db = await getDatabaseInstance();
    const descricao = req.body.descricao;
    const result = await db.run(
      `INSERT INTO todo(descricao) VALUES(?)`,
      descricao
    );
    res.send(result);
  });

  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
}

main();
