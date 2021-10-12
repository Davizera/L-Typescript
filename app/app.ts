import { NegociacaoController } from "./controllers/negociacao-controller.js";

const form = document.querySelector(".form");
const controller = new NegociacaoController();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});
