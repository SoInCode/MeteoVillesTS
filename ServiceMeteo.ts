export class ServiceMeteo {
    static getData(ville: string, callback: any) {
        fetch(`https://www.prevision-meteo.ch/services/json/${ville}`)
            .then((response: any) => response.json())
            .then((data: any) => {
                let city: string = data.city_info.name;
                let date: string = data.current_condition.date;
                let fcst: Day[] = [];
                for (let prev in data) {
                    if (prev.startsWith("fcst_day_")) {
                        console.log(prev);
                        let { day_long, tmin, tmax, condition } = data[prev];
                        fcst.push({ day_long, tmin, tmax, condition });
                    };
                }
                callback({ city, date, fcst });
            })
            .catch(error => console.error(error));
    }
}
