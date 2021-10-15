import { Negociacao } from "../models/negociacao.js";
import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";

export class NegociacoesServices {
  public importarNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((data: NegociacoesDoDia[]) => {
        return data.map(
          (negociacao) =>
            new Negociacao(new Date(), negociacao.vezes, negociacao.montante)
        );
      });
  }
}
