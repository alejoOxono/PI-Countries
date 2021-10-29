const { Router } = require("express");
const server = require("../app");
const bulkActivityBD = require("../modules/bulkActivityBD");
const express = require("express");
const { conn } = require("../db");
const { Activity } = conn.models;

const router = Router();
router.use(express.json());


router.post('/activity', async (req, res) => {
    let para = req.body;

    await bulkActivityBD(para);
    res.send('correcto');
})

router.get('/activity', async(req, res, next) => {
    
    try{
        let control = await Activity.findAll();
        res.json(control);
    }
    catch(err){
        next(err);
    }
})

module.exports = router;