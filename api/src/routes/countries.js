const { Router } = require("express");
const bulkCountryBD = require("../modules/bulkCountryBD");
const idSearchCountry = require("../modules/idSearchCountry");
const searchCountry = require("../modules/searchCountry");
// const getCountries = require("../modules/getCountries");
const router = Router();


router.get('/', async (req, res, next) => {
    try {

        let resultado = await searchCountry();
        res.send(resultado);

    } catch (err) {
        next(err)
    }
})


router.get('/countries', async (req, res, next) => {
    try {

        let { name } = req.query;
        let resultado = await searchCountry(name);
        res.send(resultado);

    } catch (err) {
        next(err)
    }
})


router.get('/countries/:idPais', async (req, res, next) => {
    try {

        let { idPais } = req.params;
        let resultado = await idSearchCountry(idPais);
        res.json(resultado);

    } catch (err) {
        next(err)
    }
})


module.exports = router;

