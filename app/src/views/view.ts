import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  private _element: HTMLElement;

  constructor(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      this._element = element as HTMLElement;
    } else {
      throw Error(
        `Não foi possível encontrar o seletor ${selector}, por favor verifique se o mesmo existe no DOM.`
      );
    }
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  @inspect()
  public update(model: T): void {
    let template = this.template(model);
    this._element.innerHTML = template;
  }
}
