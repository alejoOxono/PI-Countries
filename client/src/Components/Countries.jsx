import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/actionsCreator';

const Countries = () => {

    const countries = useSelector((state) => state.dataBaseCountry)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCountries())

    },[]) 
    console.log(countries)



    return (
        <div className="grid-container">
            <div className="Nav"></div>
            <div className="Imagenes"></div>
            <div className="Search"></div>
            <div className="Body">
                {/* <button onClick={(e) => obtener(e)} type='button'>buscar</button> */}

            </div>
            <div className="Footer"></div>
            <div className="Body1"></div>
            <div className="Body2"></div>
            <div className="Body3"></div>
        </div>
    )
}


export default Countries;