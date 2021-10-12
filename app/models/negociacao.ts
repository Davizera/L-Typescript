export class Negociacao {
  private _data: Date;
  private _valor: number;
  private _quantidade: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._valor = valor;
    this._quantidade = quantidade;
  }

  get data() {
    return this._data;
  }

  get valor() {
    return this._valor;
  }

  get quantidade() {
    return this._quantidade;
  }

  get volume() {
    return this._valor * this._quantidade;
  }
}
