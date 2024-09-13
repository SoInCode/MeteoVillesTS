export function affichage(selecteur, template) {
    return (target, nomMethode, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            template = template.replace("%s", result);
            document.querySelector(selecteur).innerHTML = template;
        };
    };
}
//# sourceMappingURL=decorateurs.js.map