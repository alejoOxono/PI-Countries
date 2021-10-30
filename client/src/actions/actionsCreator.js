import { ADD_ACTIVITY, COUNTRY_SELECTED, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, FILTER_COUNTRIES_ORD_POPULATION, GET_ACTIVITIES, GET_COUNTRIES, SEARCH_COUNTRY_BY_NAME } from "./constants";
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
            .catch((err) => {
                //dispatch de error
                console.log(err);
            })
    }

}


export const countrySelected = (id) => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/countries/${id}`)
            .then((data) => {
                dispatch({
                    type: COUNTRY_SELECTED,
                    payload: data.data[0]
                })
            })
            .catch((err) => {
                //dispatch de error
                console.log(err);
            })
    }
}


export const addActivity = (form) => {
    return function(dispatch){
        return axios.post('http://localhost:3001/activity', form)
        .then((data)=>data)
        .catch((err) => {
            //dispatch de error
            console.log(err);
        })
    }
}

export const getActivities = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/activity')
        .then((data)=>{
            dispatch({
                type: GET_ACTIVITIES,
                payload: data.data
            })
        })
        .catch((err) => {
            //dispatch de error
            console.log(err);
        })
    }
}