import { Op } from "sequelize/types";
import { noExtendLeft } from "sequelize/types/lib/operators";
import Country from "../models/Country";
import TuriscActivity from "../models/TuriscActivity";

const getActivities = async(dato) => {
    try{
        if(dato.length === 3){
            let activities = await TuriscActivity.findAll({
                include: Country,
                where:{
                    id:{
                        [Op.iLike]:dato
                    }
                }
            });
            return activities
        }else{
            let activities = await TuriscActivity.findAll({
                include: Country,
                where:{
                    name:{
                        [Op.iLike]:dato
                    }
                }
            });
            return activities
        }
    }catch(err){
        next(err)
    }
}

export default getActivities;