import { ADD_ACTIVITY, COUNTRY_SELECTED, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, FILTER_COUNTRIES_ORD_POPULATION, GET_ACTIVITIES, GET_COUNTRIES, SEARCH_COUNTRY_BY_ACTIVITY, SEARCH_COUNTRY_BY_NAME } from "../actions/constants";

const stateInitial = {
    dataBaseCountry: [],
    dataBaseActivities: [],
    countriesFiltered: [],
    countryPage: {},
}

const rootReduce = (state = stateInitial, { type, payload }) => {
    switch (type) {


        case GET_COUNTRIES:
            return {
                ...state,
                countriesFiltered: payload,
                dataBaseCountry: payload
            };


        case FILTER_COUNTRIES_BY_CONTINENT:
            let newArrayFiltered = (payload === 'All' ? state.dataBaseCountry : state.dataBaseCountry.filter((country) => country.continent === payload));
            return {
                ...state,
                countriesFiltered: newArrayFiltered
            };


        case FILTER_COUNTRIES_ORD_NAME:
            let arrayFilteredByName = (payload === 'asc' ?
                state.countriesFiltered.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countriesFiltered.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                }));
            return {
                ...state,
                countriesFiltered: arrayFilteredByName
            };


        case FILTER_COUNTRIES_ORD_POPULATION:
            let arrayFilteredByPopulation = (payload === 'asc' ?
                state.countriesFiltered.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countriesFiltered.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0;
                }));
            return {
                ...state,
                countriesFiltered: arrayFilteredByPopulation
            };


        case SEARCH_COUNTRY_BY_NAME:
            return {
                ...state,
                countriesFiltered: payload
            };


        case COUNTRY_SELECTED:
            return {
                ...state,
                countryPage: payload
            };


        case ADD_ACTIVITY:
            return {
                ...state
            }


        case GET_ACTIVITIES:
            return {
                ...state,
                dataBaseActivities: payload
            }


        case SEARCH_COUNTRY_BY_ACTIVITY:
            let filterByActivities = state.dataBaseCountry.filter((el) => el.activities ? el.activities[0]?.name === payload:[])
            return {
                ...state,
                countriesFiltered: filterByActivities
            }

        default:
            return state;
    }
}

export default rootReduce;