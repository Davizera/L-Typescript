var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { MessageView } from "../views/message-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView("#table-negociacao");
        this._view = new MessageView("#mensagemView");
        this._negociacoesService = new NegociacoesServices();
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this._data.value, this._quantidade.value, this._valor.value);
        if (!this._ehDiaUtil(negociacao.data)) {
            this._view.update("Só é possível adicionar negociações em dias úteis.");
            return;
        }
        this._negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this._updateAllView();
    }
    importarNegociacoes() {
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
    _ehDiaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
    _updateAllView() {
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "_data", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "_quantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "_valor", void 0);
__decorate([
    logarTempoExecucao()
], NegociacaoController.prototype, "adiciona", null);
//# sourceMappingURL=negociacao-controller.js.map