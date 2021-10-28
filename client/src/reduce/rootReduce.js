import { ADD_ACTIVITY, COUNTRY, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, GET_COUNTRIES, SEARCH_COUNTRY } from "../actions/constants";

const stateInitial = {
    dataBaseCountry: [],
    countriesFiltered: [],
    country: {},
    activity: {}
}

const rootReduce = (state = stateInitial, { type, payload }) => {
    switch (type) {

        case GET_COUNTRIES:
            return {
                ...state,
                dataBaseCountry: payload,
                countriesFiltered: payload
            };

        case FILTER_COUNTRIES_BY_CONTINENT:
            let newArrayFiltered = (payload === 'All' ? state.dataBaseCountry : state.dataBaseCountry.filter((country) => country.continent === payload));
            return {
                ...state,
                countriesFiltered: newArrayFiltered
            }

        case FILTER_COUNTRIES_ORD_NAME:
            let newArrayFilteredByName = (payload === 'asc' ? state.countriesFiltered.sort((country)=>country.name):[])
            return {
                ...state,
                countriesFiltered: newArrayFilteredByName
            }

        case SEARCH_COUNTRY:
            return state;

        case COUNTRY:
            return state;

        case ADD_ACTIVITY:
            return state;

        default:
            return state;
    }
}

export default rootReduce;