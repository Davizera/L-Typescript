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
