const botaoAdicionar = document.getElementById('adicionar-btn');
const inputTarefa = document.getElementById('tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', adicionarTarefa);
inputTarefa.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const tarefaTexto = inputTarefa.value.trim();

  if (tarefaTexto.length > 0) {
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefaTexto;

    const btnFeito = document.createElement('button');
    btnFeito.innerHTML = '<i class="fas fa-check"></i>';
    btnFeito.addEventListener('click', () => {
      novaTarefa.classList.toggle('completa');
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="fas fa-trash"></i>';
    btnExcluir.addEventListener('click', () => {
      novaTarefa.remove();
    });

    novaTarefa.appendChild(btnFeito);
    novaTarefa.appendChild(btnExcluir);
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = '';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/tarefas')
    .then((response) => response.json())
    .then((dados) => {
      dados.forEach((tarefa) => {
        let itemDiv = document.createElement('div');
        let li = document.createElement('li');
        li.innerText = tarefa.descricao;
        itemDiv.appendChild(li);
        listaTarefas.appendChild(itemDiv);
      });
    })
    .catch((error) => {
      console.error('Ocorreu um erro: ', error);
    });
});

function enviarTarefa() {
  fetch('http://localhost:3000/tarefas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ descricao: inputTarefa.value }),
  })
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
    });
}
