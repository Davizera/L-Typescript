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
}
