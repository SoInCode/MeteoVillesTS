export class ServiceMeteo {
    static getData(ville, callback) {
        fetch(`https://www.prevision-meteo.ch/services/json/${ville}`)
            .then((response) => response.json())
            .then((data) => {
            let city = data.city_info.name;
            let date = data.current_condition.date;
            let fcst = [];
            for (let prev in data) {
                if (prev.startsWith("fcst_day_")) {
                    console.log(prev);
                    let { day_long, tmin, tmax, condition } = data[prev];
                    fcst.push({ day_long, tmin, tmax, condition });
                }
                ;
            }
            callback({ city, date, fcst });
        })
            .catch(error => console.error(error));
    }
}
//# sourceMappingURL=ServiceMeteo.js.map