function salva() {
  const cad = {
    nome: document.getElementById("Nome").value,
    sobrenome: document.getElementById("Sobrenome").value,
    DataNasc: document.getElementById("DataNasc").value
  }

  if (cad.nome === "" || cad.sobrenome === "" || cad.DataNasc === "") {
    const add1 = document.getElementById("add1")
    add1.innerHTML = 'Você precisa fazer o cadastro de formar correta esta faltando informações'
    add1.style.fontFamily = "sans-serif"
    add1.style.color = "red"

  } else {
    const add1 = document.getElementById("add1")
    add1.innerHTML = 'Cadastro feito com sucesso! Faça seu pedido'
    add1.style.fontFamily = "sans-serif"
    add1.style.color = "blue"
  }

}

function add(){

  const add2 = document.getElementById("add2")
  add2.innerHTML = "Pedido feito favor retira no no balcão"
  add2.style.fontFamily = "sans-serif"
  add2.style.color = "green"
}