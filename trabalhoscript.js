document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao1");

  botao.addEventListener("click", function () {
    document.getElementById("mensagem").innerText = "Você é incrível! Continue acreditando em você!";
  });
});

