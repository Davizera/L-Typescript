export abstract class View<T> {
  private _element: HTMLElement;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    this._element.innerHTML = this.template(model);
  }
}
