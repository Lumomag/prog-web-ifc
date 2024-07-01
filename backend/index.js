const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.static('public'));

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/sobre', (req, res) => {
  res.send('Está é a página sobre');
});

app.get('/tarefas', (req, res) => {
  const tarefas = require('./public/tarefas.json');
  res.json(tarefas);
});

app.post('/novaTarefa', (req, res)=>{
  console.log(req.body);
  res.send("A req POST para novaTarefa/ chegou")
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
