const axios = require('axios');

const getCountries = async () => {

    const data = await axios.get('https://restcountries.com/v3.1/all');
    const apiData = data.data.map((dato) => {
        return ({
            id: dato.cca3,
            name: dato.name.common,
            flag: dato.flags.png,
            shield: dato.coatOfArms.png,
            map: dato.maps.openStreetMaps,
            continent: dato.region,
            capital: dato.capital,
            region: dato.subregion,
            area: dato.area,
            population: dato.population
        });
    });
    return apiData;

    // const control = apiData[0].capital[0]

}
module.exports = getCountries;