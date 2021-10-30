const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoute = require('../routes/countries')  
const activityRoute = require('../routes/activity')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', countriesRoute);
router.get('/countries/:idPais', countriesRoute);
router.get('/countries', countriesRoute);
router.post('/activity', activityRoute);
router.get('/activity', activityRoute);

module.exports = router;
