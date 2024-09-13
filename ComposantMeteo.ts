import { affichage } from "./decorateurs.js";

export class ComposantMeteo {
    @affichage("#prev",`
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
    static afficherMeteo(container: string, data: Meteo) {
        let tr: string = "";
        data.fcst.forEach((day) => {
            tr += `
            <tr>
                <td>${day.day_long}</td>
                <td>${day.condition}</td>
                <td>${day.tmin}</td>
                <td>${day.tmax}</td>
            </tr>
            `;
        })
        return tr;
    };

    @affichage('#titre',`<h1>%s</h1>`)
    static afficherTitre(data: Meteo){
        return data.city;
    }
}