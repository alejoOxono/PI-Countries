const { conn } = require("../db");
const { QueryTypes } = require('sequelize');

const validation = async () => {

    let con = await conn.query(
        'SELECT COUNT(id) FROM country',
        {
            type: QueryTypes.SELECT
        }
    );
    if (con[0].count == 0) return false
    else return true;

}

module.exports = validation;