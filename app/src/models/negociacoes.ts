import { Model } from "../interfaces/model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Model<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  toString(): string {
    let negociacoes = new Array<string>();
    for (const negociacao of this._negociacoes) {
      negociacoes.push(negociacao.toString() + "\n");
    }
    return negociacoes.join("");
  }
  equal(negociacoes: Negociacoes): boolean {
    return negociacoes
      .lista()
      .every((negociacao, index) => negociacao.equal(this._negociacoes[index]));
  }

  public adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}
