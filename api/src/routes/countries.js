const { Router } = require("express");
const bulkCountryBD = require("../modules/bulkCountryBD");
const idSearchCountry = require("../modules/idSearchCountry");
const searchCountry = require("../modules/searchCountry");
const validation = require("../modules/validation");
// const getCountries = require("../modules/getCountries");
const router = Router();


router.get('/', async (req, res, next) => {
    try {

        let valor = await validation();
        if (valor === false) await bulkCountryBD();

        res.send('correcto');

    } catch (err) {
        next(err)
    }
})


router.get('/countries', async (req, res, next) => {
    try {

        let { name } = req.query;
        let valor = await validation();
        if (valor === false) await bulkCountryBD();
        let resultado = await searchCountry(name);
        res.send(resultado);

    } catch (err) {
        next(err)
    }
})


router.get('/countries/:idPais', async (req, res, next) => {
    try {

        let { idPais } = req.params;
        let valor = await validation();
        if (valor === false) await bulkCountryBD();
        let resultado = await idSearchCountry(idPais);
        res.json(resultado);

    } catch (err) {
        next(err)
    }
})


module.exports = router;


/* GET /countries:

    En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
    Obtener un listado de los paises.

GET /countries/{idPais}:

    Obtener el detalle de un país en particular
    Debe traer solo los datos pedidos en la ruta de detalle de país
    Incluir los datos de las actividades turísticas correspondientes

GET /countries?name="...":

    Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
    Si no existe ningún país mostrar un mensaje adecuado

 */
