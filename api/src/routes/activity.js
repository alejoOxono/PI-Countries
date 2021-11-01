const { Router } = require("express");
const server = require("../app");
const bulkActivityBD = require("../modules/bulkActivityBD");
const express = require("express");
const searchActivity = require("../modules/searchActivity");

const router = Router();
router.use(express.json());


router.post('/activity', async (req, res) => {
    let para = req.body;

    await bulkActivityBD(para);
    res.send('correcto');
})

router.get('/activity', async(req, res, next) => {
    
    try{
        let { name } = req.query;
        let resultado = await searchActivity(name);
        res.json(resultado);
    }
    catch(err){
        next(err);
    }
})

module.exports = router;