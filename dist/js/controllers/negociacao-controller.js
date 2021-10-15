import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/message-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView("#table-negociacao");
        this._view = new MessageView("#mensagemView");
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this._negociacoesView.update(this._negociacoes);
        this._view.update("Negociação inserida com sucesso!");
    }
    criaNegociacao() {
        const regex = /-/g;
        const date = new Date(this._data.value.replace(regex, ","));
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this._data.value = "";
        this._quantidade.value = "";
        this._valor.value = "";
        this._data.focus();
    }
}
