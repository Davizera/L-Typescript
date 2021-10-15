export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        const getter = function () {
            console.log(`Getter da classe ${target.constructor.name} para propiedade ${propertyKey} chamado!`);
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando property ${propertyKey} no DOM com o seletor ${selector}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
