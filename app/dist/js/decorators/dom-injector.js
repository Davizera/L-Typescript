export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        console.log(`Decorator executado para ${selector} e propriedade ${propertyKey}`);
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando property ${propertyKey} no DOM com o seletor ${selector}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
