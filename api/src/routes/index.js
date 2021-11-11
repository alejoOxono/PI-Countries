const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoute = require('../routes/countries')  
const activityRoute = require('../routes/activity')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/api', countriesRoute);
router.get('/api/countries/:idPais', countriesRoute);
router.get('/api/countries', countriesRoute);
router.post('/api/activity', activityRoute);
router.get('/api/activity', activityRoute);

module.exports = router;
