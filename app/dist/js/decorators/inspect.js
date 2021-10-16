export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`----> Método: ${propertyKey}`);
            console.log(`----> Classe: ${this.constructor.name}`);
            const result = originalMethod.apply(this, args);
            console.log(`----> Retorno: ${JSON.stringify(result)}`);
            return result;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map