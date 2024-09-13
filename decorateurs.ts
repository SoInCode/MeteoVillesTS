export function affichage(selecteur:string, template: string){
    return (target: any, nomMethode: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]){
            const result = originalMethod.apply(this, args);
            template = template.replace("%s", result);
            document.querySelector(selecteur).innerHTML = template;
        }
    }
}