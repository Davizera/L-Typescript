import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
  private _data: HTMLInputElement;
  private _quantidade: HTMLInputElement;
  private _valor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacaoView("#table-negociacao", true);
  private _view = new MessageView("#mensagemView");

  constructor() {
    this._data = document.querySelector("#data") as HTMLInputElement;
    this._quantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this._valor = document.querySelector("#valor") as HTMLInputElement;
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this._data.value,
      this._quantidade.value,
      this._valor.value
    );

    if (!this._ehDiaUtil(negociacao.data)) {
      this._view.update("Só é possível adicionar negociações em dias úteis.");
      return;
    }

    this._negociacoes.adiciona(negociacao);
    this.limpaFormulario();
    this._updateAllView();
  }

  private _ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private _updateAllView() {
    this._negociacoesView.update(this._negociacoes);
    this._view.update("Negociação inserida com sucesso!");
  }

  private criaNegociacao(): Negociacao {
    const regex = /-/g;
    const date = new Date(this._data.value.replace(regex, ","));
    const quantidade = parseInt(this._quantidade.value);
    const valor = parseFloat(this._valor.value);

    return new Negociacao(date, quantidade, valor);
  }

  private limpaFormulario(): void {
    this._data.value = "";
    this._quantidade.value = "";
    this._valor.value = "";
    this._data.focus();
  }
}