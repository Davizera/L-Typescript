import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { MessageView } from "../views/message-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private _data: HTMLInputElement;
  @domInjector("#quantidade")
  private _quantidade: HTMLInputElement;
  @domInjector("#valor")
  private _valor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacaoView("#table-negociacao");
  private _view = new MessageView("#mensagemView");
  private _negociacoesService = new NegociacoesServices();

  constructor() {
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

  public importarNegociacoes(): void {
    this._negociacoesService
      .importarNegociacoesDoDia()
      .then((negociacoesDoDia) => {
        let negos = negociacoesDoDia.filter((negociacaoDeHoje) => {
          return !this._negociacoes
            .lista()
            .some((negociacao) => negociacaoDeHoje.equal(negociacao));
        });
        return negos;
      })
      .then((negociacoes) => {
        if (negociacoes.length == 0) {
          this._view.update("Só é permitido importar uma vez por dia!");
          return;
        }
        for (const negociacao of negociacoes) {
          this._negociacoes.adiciona(negociacao);
        }
        this._updateAllView();
        this._view.update("Importação realizada com sucesso!");
      });
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
