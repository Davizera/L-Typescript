export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Decorator escape entrando em ação no método ${propertyKey}, classe: ${this.constructor.name}`
    );

    let result = originalMethod.apply(this, args);
    if (typeof result === "string") {
      result.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return result;
  };

  return descriptor;
}
