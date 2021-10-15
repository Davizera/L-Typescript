import { NegociacaoController } from "../controllers/negociacao-controller.js";
const form = document.querySelector(".form");
const controller = new NegociacaoController();
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível iniciar a aplicação!");
}
