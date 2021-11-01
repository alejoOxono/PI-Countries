const { conn } = require("../db");
const { Activity, Country } = conn.models;
const { Op } = require('sequelize')


const searchActivity = async (activity) => {
    if (!activity) {

        let control = await Activity.findAll();
        return control;

    } else {
        activity = activity.toLowerCase();

        let control = await Activity.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${activity}%`
                }
            },
            include: [Country],
        })
        return control;
    }
}

module.exports = searchActivity;