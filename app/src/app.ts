import { NegociacaoController } from "./controllers/negociacao-controller.js";

const form = document.querySelector(".form");
const controller = new NegociacaoController();
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error("Não foi possível iniciar a aplicação!");
}

const btnImportar = document.querySelector("#btn-importar");
if (btnImportar) {
  btnImportar.addEventListener("click", () => {
    controller.importarNegociacoes();
  });
} else {
  throw Error("Botão de importação não foi encontrado!");
}
