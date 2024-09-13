var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { affichage } from "./decorateurs.js";
export class ComposantMeteo {
    static afficherMeteo(container, data) {
        let tr = "";
        data.fcst.forEach((day) => {
            tr += `
            <tr>
                <td>${day.day_long}</td>
                <td>${day.condition}</td>
                <td>${day.tmin}</td>
                <td>${day.tmax}</td>
            </tr>
            `;
        });
        return tr;
    }
    ;
    static afficherTitre(data) {
        return data.city;
    }
}
__decorate([
    affichage("#prev", `
    <table>
    <thead>
        <tr>
            <th>Jour</th>
            <th>Condition</th>
            <th>Tmin</th>
            <th>Tmax</th>
        </tr>
        </thead>
        <tbody>
            %s
        </tbody>
    </table>
    `)
], ComposantMeteo, "afficherMeteo", null);
__decorate([
    affichage('#titre', `<h1>%s</h1>`)
], ComposantMeteo, "afficherTitre", null);
//# sourceMappingURL=ComposantMeteo.js.map