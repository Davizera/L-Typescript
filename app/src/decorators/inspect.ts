export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`----> Método: ${propertyKey}`);
      console.log(`----> Classe: ${this.constructor.name}`);

      const result = originalMethod.apply(this, args);

      console.log(`----> Retorno: ${JSON.stringify(result)}`);
      return result;
    };

    return descriptor;
  };
}
