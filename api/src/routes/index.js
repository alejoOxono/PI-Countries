const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoute = require('../routes/countries')  

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', countriesRoute)
router.get('/countries', countriesRoute)
router.get('/countries/:idPais', countriesRoute)
router.get('/countries?name', countriesRoute)


module.exports = router;
