import { ADD_ACTIVITY, COUNTRY, GET_COUNTRIES, SEARCH_COUNTRY } from "./constants";
const axios = require('axios');

export const getCountries = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3001')
            .then((data) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                })
            })
    }
}


export const searchCountry = () => {
    return {
        type: SEARCH_COUNTRY,
        payload: 'nada'
    }
}


export const country = () => {
    return {
        type: COUNTRY,
        payload: 'nada'
    }
}


export const addActivity = () => {
    return {
        type: ADD_ACTIVITY,
        payload: 'nada'
    }
}