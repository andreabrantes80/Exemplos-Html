//cria referencia ao form e aos elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");
const resp4 = document.querySelector("#outResp4");
const resp5 = document.querySelector("#outResp5");

//cria um ouvinte de evento, acionado quando obotão submit for clicado

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const veiculos = frm._veiculo.value; //obtem o conteúdo dos campos
  const preco = Number(frm._preco.value);
  const juros = Number(frm._juros.value) / 100; //converte a taxa de juros  para decimal
    const n = Number(frm._parcelas.value);

  const entrada = preco * 0.5; //calcula o valor da entrada
  const valorFinanciado = preco * 0.5; //e das parcelas

  //se taxa de juros for maior que 0 aplica o calculo com juros
  // Verifica se os campos de juros e parcelas são válidos
    if (isNaN(juros) || isNaN(n) || juros === 0 || n === 0) {
        // Oculta os campos de parcelas e juros se não forem válidos
        resp1.innerText = `Promoção: ${veiculos}`;
        resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
        resp3.innerText = ''; // Oculta o campo de parcelas
        resp4.innerText = `Total pago: R$ ${(entrada + valorFinanciado).toFixed(2)}`; // Apenas entrada + valor financiado
    } else {
        // Calcula o valor das parcelas com ou sem juros
        let parcela;
        if (juros > 0) {
            parcela = (valorFinanciado * Math.pow(1 + juros, n) * juros) / (Math.pow(1 + juros, n) - 1);
        } else {
            parcela = valorFinanciado / n; // Se juros for zero, apenas divide igualmente
        }

        const total = entrada + parcela * n; //calculo total pago incluindo a entrada e as parcelas

        resp1.innerText = `Promoção: ${veiculos}`;
        resp2.innerText = `Entrada de R$:  ${entrada.toFixed(2)}`;
        resp3.innerText = `${n}x de R$: ${parcela.toFixed(2)}`;
        resp4.innerText = `Total pago: R$: ${total.toFixed(2)}`;
    }
});

document.getElementById("limparCampos").addEventListener("click", function () {
  document.getElementById("_veiculo").value = "";
  document.getElementById("_preco").value = "";
  document.getElementById("_juros").value = "";
  document.getElementById("_parcelas").value = "";
});
