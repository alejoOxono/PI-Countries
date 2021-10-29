import { ADD_ACTIVITY, COUNTRY, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, FILTER_COUNTRIES_ORD_POPULATION, GET_COUNTRIES, SEARCH_COUNTRY_BY_NAME } from "./constants";
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


export const filterCountriesOrdName = (orden) => {
    return {
        type: FILTER_COUNTRIES_ORD_NAME,
        payload: orden
    }
}


export const filterCountriesOrdPopulation = (orden) => {
    return {
        type: FILTER_COUNTRIES_ORD_POPULATION,
        payload: orden
    }
}


export const searchCountry = (name) => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/countries?name=${name}`)
            .then((data) => {
                dispatch({
                    type: SEARCH_COUNTRY_BY_NAME,
                    payload: data.data
                })
            })
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