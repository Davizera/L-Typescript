export function escape(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let result = originalMethod.apply(this, args);
        if (typeof result === "string") {
            result.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map