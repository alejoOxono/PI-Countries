const { conn } = require("../db");
const getCountries = require("./getCountries");

const { Country } = conn.models;


const bulkCountryBD = async () => {
    let data = await getCountries();
    data.forEach(async (country) => {
        Country.create({

            id: country.id,
            name: country.name,
            flag: country.flag,
            shield: country.shield,
            map: country.map,
            continent: country.continent,
            capital: country.capital[0],
            region: country.region,
            area: country.area,
            population: country.population

        })
    })
    return 'correcto'


}

module.exports = bulkCountryBD;
