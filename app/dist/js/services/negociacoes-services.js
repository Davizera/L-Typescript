import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    importarNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((negociacao) => new Negociacao(new Date(), negociacao.vezes, negociacao.montante));
        });
    }
}
