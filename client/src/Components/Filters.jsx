import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByContinent, filterCountriesOrdName, filterCountriesOrdPopulation, getActivities, searchCountry, searchCountryByActivity } from "../actions/actionsCreator";
import styles from '../css-module/Filters.module.css'

const Filter = ({ paginar, setOrden }) => {
    const [activity, setActivity] = useState('')
    const activities = useSelector((state) => state.dataBaseActivities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities())
    }, [])

    const searchByCountry = (e) => {
        e.preventDefault();
        dispatch(searchCountry(e.target.value))
        setOrden(`Encontrado ${e.target.value}`)
    }

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

    const handlerActivity = (e) => {
        setActivity((e.target.value).toLowerCase())
    }

    const searchActivity = (e) => {
        e.preventDefault();
        dispatch(searchCountryByActivity(activity));
        paginar(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className={styles.all}>
            <div className={styles.filaUno}>

                <div className={styles.continents}>
                    <div className={styles.firstPart}>

                        <button type="button" value='All' onClick={(e) => handlerContinent(e)}>All</button>
                        <button type="button" value='Asia' onClick={(e) => handlerContinent(e)}>Asia</button>
                        <button type="button" value='Europe' onClick={(e) => handlerContinent(e)}>Europe</button>
                    </div>

                    <div className={styles.secondPart}>

                        <button type="button" value='Oceania' onClick={(e) => handlerContinent(e)}>Oceania</button>
                        <button type="button" value='Americas' onClick={(e) => handlerContinent(e)}>Americas</button>
                        <button type="button" value='Africa' onClick={(e) => handlerContinent(e)}>Africa</button>
                    </div>
                </div>

                <div className={styles.ordenamiento}>
                    <fieldset>
                        <legend>Ordenamiento</legend>
                        <select onChange={(e) => handlerName(e)}>
                            <option disabled selected>Orden alfabético</option>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>

                        <select onChange={(e) => handlerPopulation(e)}>
                            <option disabled selected>Orden poblacional</option>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>
                    </fieldset>
                </div>


                <div className={styles.actividades}>
                    <fieldset>
                        <legend>Activities</legend>
                        <input placeholder='Buscar actividades...' list='Activities' type='text' onChange={(e) => handlerActivity(e)} />
                        <datalist id='Activities'>
                            {activities?.map((el) => {
                                return <option value={el.name} />
                            })}
                        </datalist>
                        <button type='button' className={styles.butActivities} onClick={(e) => searchActivity(e)}>Buscar</button>
                    </fieldset>
                </div>
            </div>

            <div className={styles.search}>
                <input type='text' placeholder='Busqueda por País ...' onChange={(e) => searchByCountry(e)} />
            </div>

        </div>
    )
}


export default Filter;