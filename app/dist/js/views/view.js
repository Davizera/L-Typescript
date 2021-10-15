var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
export class View {
    constructor(selector, escapar) {
        this._escapar = false;
        const element = document.querySelector(selector);
        if (element) {
            this._element = element;
        }
        else {
            throw Error(`Não foi possível encontrar o seletor ${selector}, por favor verifique se o mesmo existe no DOM.`);
        }
        this._escapar = !!escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        this._element.innerHTML = template;
    }
}
__decorate([
    logarTempoExecucao()
], View.prototype, "update", null);