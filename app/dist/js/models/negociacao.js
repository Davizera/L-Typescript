export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    toString() {
        return `DATA: ${this._data} \t VALOR: ${this.valor} \t QUANTIDADE: ${this.quantidade}`;
    }
    equal(negociacao) {
        return (negociacao.data.toJSON() == this.data.toJSON() &&
            negociacao.quantidade == this.quantidade &&
            negociacao.valor == this.valor);
    }
    get data() {
        return new Date(this._data);
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    static criaDe(dataInput, quantidadeInput, valorInput) {
        const regex = /-/g;
        const date = new Date(dataInput.replace(regex, ","));
        const quantidade = parseInt(quantidadeInput);
        const valor = parseFloat(valorInput);
        return new Negociacao(date, quantidade, valor);
    }
}
//# sourceMappingURL=negociacao.js.map