const { conn } = require("../db");


const { Activity } = conn.models

const bulkActivityBD = (para) =>{
    if(!para.name) return null;
    if(typeof para.name === 'array'){
        let arr = para.name;
        arr.forEach(element => {
            Activity.create({
                name: element,
                dificulty: para.dificulty,
                duration: para.duration,
                season: para.season
            })

        });    
    }
    if(typeof para.name === 'string'){
        Activity.create({
            name: para.name,
            dificulty: para.dificulty,
            duration: para.duration,
            season: para.season
        })
    }
}

module.exports = bulkActivityBD;