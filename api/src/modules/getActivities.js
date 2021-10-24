import { Op } from "sequelize/types";
import Country from "../models/Country";
import TuriscActivity from "../models/TuriscActivity";

const getActivities = async(dato) => {
    if(dato.length === 3){
        let activities = await TuriscActivity.findAll({
            include: Country,
            where:{
                id:{
                    [Op.iLike]:dato
                }
            }
        })
    }else{
        let activities = await TuriscActivity.findAll({
            include: Country,
            where:{
                name:{
                    [Op.iLike]:dato
                }
            }
        })
    }
}

export default getActivities;