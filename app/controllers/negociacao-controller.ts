import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private _data: HTMLInputElement;
  private _quantidade: HTMLInputElement;
  private _valor: HTMLInputElement;
  private _negociacoes = new Negociacoes();

  constructor() {
    this._data = document.querySelector("#data");
    this._quantidade = document.querySelector("#quantidade");
    this._valor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this._negociacoes.adiciona(negociacao);
    console.log(this._negociacoes.lista());
    this.limpaFormulario();
  }

  criaNegociacao(): Negociacao {
    const regex = /-/g;
    const date = new Date(this._data.value.replace(regex, ","));
    const quantidade = parseInt(this._quantidade.value);
    const valor = parseFloat(this._valor.value);

    return new Negociacao(date, quantidade, valor);
  }

  limpaFormulario(): void {
    this._data.value = "";
    this._quantidade.value = "";
    this._valor.value = "";
    this._data.focus();
  }
}
