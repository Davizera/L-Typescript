export function logarTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, teve tempo de execução ${(t2 - t1) / 1000} segundos.`);
            return result;
        };
        return descriptor;
    };
}
