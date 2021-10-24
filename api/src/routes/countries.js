const { Router } = require("express");
const bulkCountryBD = require("../modules/bulkCountryBD");
// const getCountries = require("../modules/getCountries");
const router = Router();


router.get('/', async (req, res, next) => {
    datos = await bulkCountryBD();
    res.send(datos)
})


router.get('/countries', async (req, res, next) => {
    let { name } = req.query
    // '/countries?name'
    datos = await getCountries();
    res.json(datos)

})


router.get('/countries/:idPais', async (req, res, next) => {
    let { idPais } = req.params
    console.log(idPais)
    datos = await getCountries();
    res.send(datos)

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
