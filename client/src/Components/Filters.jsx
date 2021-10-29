import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByContinent, filterCountriesOrdName, filterCountriesOrdPopulation } from "../actions/actionsCreator";


const Filter = ({ paginar , setOrden}) => {
    const dispatch = useDispatch()
    const filtrados = useSelector((state) => state.countriesFiltered)

    const handlerContinent = (e) => {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
        paginar(1)
    }

    const handlerName = (e) => {
        e.preventDefault()
        dispatch(filterCountriesOrdName(e.target.value));
        paginar(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    const handlerPopulation = (e) => {
        e.preventDefault()
        dispatch(filterCountriesOrdPopulation(e.target.value));
        paginar(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <div>
                <button type="button" value='All' onClick={(e) => handlerContinent(e)}>All</button>
                <button type="button" value='Asia' onClick={(e) => handlerContinent(e)}>Asia</button>
                <button type="button" value='Europe' onClick={(e) => handlerContinent(e)}>Europe</button>
                <button type="button" value='Oceania' onClick={(e) => handlerContinent(e)}>Oceania</button>
                <button type="button" value='Americas' onClick={(e) => handlerContinent(e)}>Americas</button>
                <button type="button" value='Africa' onClick={(e) => handlerContinent(e)}>Africa</button>

            </div>

            <div>
                <select onChange={(e) => handlerName(e)}>
                    <option disabled selected>------</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>

                <select onChange={(e) => handlerPopulation(e)}>
                    <option disabled selected>------</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
            </div>
            {/* 
            <div>
                {}// map para actividades
            </div> */}

        </div>
    )
}


export default Filter;