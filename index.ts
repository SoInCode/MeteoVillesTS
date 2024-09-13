import { ServiceMeteo } from "./ServiceMeteo.js";
import { ComposantMeteo } from "./ComposantMeteo.js";

window.onload = () => {
    document.querySelector("button").addEventListener('click', () => {
        let ville: string = (document.getElementById("ville") as HTMLInputElement).value;

        ServiceMeteo.getData(ville, (data: Meteo) => {
            console.log(data);
            ComposantMeteo.afficherMeteo("#prev", data);
            ComposantMeteo.afficherTitre(data);
        });
    });
}