export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            if (emSegundos) {
                console.log(`${propertyKey}, teve tempo de execução ${(t2 - t1) / 1000} segundos.`);
            }
            else {
                console.log(`${propertyKey}, teve tempo de execução ${t2 - t1} milissegundos.`);
            }
            return result;
        };
        return descriptor;
    };
}
