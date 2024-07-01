const main = document.querySelector('main')

window.onload = (event) => {
  fetch('meusdados.json')
  .then(response => response.json())
  .then(dados => {
    let h2 = document.createElement('h2')
    h2.innerText = dados.descricao
    main.appendChild(h2)

    let paragrafo = document.createElement('p')
    let txt = "Atividade desenvolvida para o curso "+dados.curso+ " no ano de "+dados.ano+"."
    paragrafo.innerText = txt
    main.appendChild(paragrafo)

    paragrafo = document.createElement('p')
    txt = "Profs "+dados.autor[0]+" e "+dados.autor[1]+"."
    paragrafo.innerText = txt
    main.appendChild(paragrafo)
  })

}