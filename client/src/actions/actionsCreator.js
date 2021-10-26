import { ADD_ACTIVITY, COUNTRY, GET_COUNTRIES, SEARCH_COUNTRY } from "./constants";
const axios = require('axios');


const getCountries = () =>{
    return{
        type:GET_COUNTRIES,
        payload
    }
}


const searchCountry = () =>{
    return{
        type:SEARCH_COUNTRY,
        payload
    }
}


const country = () =>{
    return{
        type:COUNTRY,
        payload
    }
}


const addActivity = () =>{
    return{
        type:ADD_ACTIVITY,
        payload
    }    
}

module.exports = {
    getCountries,
    searchCountry,
    country,
    addActivity
}