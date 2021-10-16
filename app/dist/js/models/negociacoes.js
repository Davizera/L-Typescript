export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    toString() {
        let negociacoes = new Array();
        for (const negociacao of this._negociacoes) {
            negociacoes.push(negociacao.toString() + "\n");
        }
        return negociacoes.join("");
    }
    equal(negociacoes) {
        return negociacoes
            .lista()
            .every((negociacao, index) => negociacao.equal(this._negociacoes[index]));
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
}
//# sourceMappingURL=negociacoes.js.map