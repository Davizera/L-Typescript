import { Model } from "../interfaces/model.js";
export class Negociacao implements Model<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  toString(): string {
    return `DATA: ${this._data} \t VALOR: ${this.valor} \t QUANTIDADE: ${this.quantidade}`;
  }

  equal(negociacao: Negociacao): boolean {
    return (
      negociacao.data.toJSON() == this.data.toJSON() &&
      negociacao.quantidade == this.quantidade &&
      negociacao.valor == this.valor
    );
  }

  get data() {
    return new Date(this._data);
  }

  get volume() {
    return this.valor * this.quantidade;
  }

  public static criaDe(
    dataInput: string,
    quantidadeInput: string,
    valorInput: string
  ): Negociacao {
    const regex = /-/g;
    const date = new Date(dataInput.replace(regex, ","));
    const quantidade = parseInt(quantidadeInput);
    const valor = parseFloat(valorInput);

    return new Negociacao(date, quantidade, valor);
  }
}
