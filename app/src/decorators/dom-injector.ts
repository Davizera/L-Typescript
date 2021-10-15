export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLInputElement;
    console.log(
      `Decorator executado para ${selector} e propriedade ${propertyKey}`
    );

    const getter = function () {
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
