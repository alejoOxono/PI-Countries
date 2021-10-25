const { Router } = require("express");
const server = require("../app");
const bulkActivityBD = require("../modules/bulkActivityBD");
const express = require("express")

const router = Router();
router.use(express.json())


router.post('/activity',(req, res) =>{
    let para = req.body;
    // console.log(para)
    bulkActivityBD(para);
    res.send('correcto')
})

module.exports = router;