export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this._element = element;
        }
        else {
            throw Error(`Não foi possível encontrar o seletor ${selector}, por favor verifique se o mesmo existe no DOM.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this._element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map