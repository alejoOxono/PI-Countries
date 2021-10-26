import { ADD_ACTIVITY, COUNTRY, GET_COUNTRIES, SEARCH_COUNTRY } from "../actions/constants";

const stateInitial = {
    dataBaseCountry : [],
    country : {},
    activity : {}
}

const rootReduce = (state=stateInitial, {type, payload}) => {
    switch(type){
        
        case GET_COUNTRIES:
            return state;

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