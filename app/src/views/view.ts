import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  private _element: HTMLElement;
  private _escapar = false;

  constructor(selector: string, escapar?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this._element = element as HTMLElement;
    } else {
      throw Error(
        `Não foi possível encontrar o seletor ${selector}, por favor verifique se o mesmo existe no DOM.`
      );
    }
    this._escapar = !!escapar;
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  public update(model: T): void {
    let template = this.template(model);

    if (this._escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");

    this._element.innerHTML = template;
  }
}
