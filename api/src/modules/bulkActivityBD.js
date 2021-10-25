const { conn } = require("../db");
const { Activity } = conn.models;

const bulkActivityBD = async (para) => {
    if (!para.country) return null;
    console.log(!await findActivity({ name: para.name }))
    if (!await findActivity({ name: para.name })) {

        await Activity.create({
            name: para.name,
            dificulty: para.dificulty,
            duration: para.duration,
            season: para.season
        })

    }
    if (typeof para.country === 'array') {
        let arr = para.country;
        let reg = await findActivity({ name: para.name });
        arr.forEach(async (el) => {
            console.log(el)
            await reg.addCountry(el);
        });
    }
    if (typeof para.country === 'string') {

        let reg = await findActivity({ name: para.name });
        await reg.addCountry(para.country);
    }

}

const findActivity = async (act) => {
    let reg = await Activity.findOne({where: act});
    return reg;
}

module.exports = bulkActivityBD;