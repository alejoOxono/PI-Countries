import { ADD_ACTIVITY, COUNTRY, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, GET_COUNTRIES, SEARCH_COUNTRY } from "./constants";
const axios = require('axios');

export const getCountries = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3001/countries')
            .then((data) => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: data.data
                })
            })
            .catch((err) => {
                //dispatch de error
                console.log(err);
            })
    }
}


export const filterCountriesByContinent = (continent) => {
    return {
        type: FILTER_COUNTRIES_BY_CONTINENT,
        payload: continent
    }
}


export const filterCountriesByName = (orden) => {
    return {
        type: FILTER_COUNTRIES_ORD_NAME,
        payload: orden
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