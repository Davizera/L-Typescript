export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

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
