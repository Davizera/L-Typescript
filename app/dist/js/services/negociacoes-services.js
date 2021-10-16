import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    importarNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((data) => {
            return data.map((negociacao) => new Negociacao(new Date(2021, 10, 15), negociacao.vezes, negociacao.montante));
        });
    }
}
//# sourceMappingURL=negociacoes-services.js.map