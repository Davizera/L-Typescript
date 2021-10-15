export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLInputElement;
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );

    const getter = function () {
      console.log(
        `Getter da classe ${target.constructor.name} para propiedade ${propertyKey} chamado!`
      );

      if (!element) {
        element = <HTMLInputElement>document.querySelector(selector);
        console.log(
          `Buscando property ${propertyKey} no DOM com o seletor ${selector}`
        );
      }
      return element;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
