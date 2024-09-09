//cria referência ao form
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvinte de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const titulo = frm.meuTitulo.value
    const duracao = Number(frm.minDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60 // obtém o resto da divisão

    resp1.innerText = titulo
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`

    e.preventDefault()    //evita o envio do formulário
})

document.getElementById("limparCampos").addEventListener("click", function () {
  document.getElementById("meuTitulo").value = "";
  document.getElementById("minDuracao").value = "";
});