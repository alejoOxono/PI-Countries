import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { countrySelected } from '../actions/actionsCreator';
import styles from '../css-module/Country.module.css';
import Nav from './Nav';


const Country = () => {
    const { id } = useParams();
    const [posc, setPosc] = useState(0);
    const country = useSelector((state) => state.countryPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countrySelected(id))
    }, [dispatch])

    const handlePrevious = (e) => {
        e.preventDefault();
        if (posc >= 1) {
            setPosc(posc - 1)
        } else {
            setPosc(country.activities.length - 1)
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        if (posc < country.activities.length - 1) {
            setPosc(posc + 1)
        } else {
            setPosc(0)
        }
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.Nav}>
                <Nav />
            </div>

            <div className={styles.Map} >
                <h2>Mapa</h2>

                <figure className={styles.contMap}>
                    <img src={country.map} alt='MAP NOT FOUND' />
                </figure>

            </div>

            <div className={styles.Simbolos}>
                <h2>Símbolos Patrios</h2>

                <div className={styles.figures}>
                    <figure className={styles.contFlag}>
                        <img src={country.flag} alt="bandera" />
                    </figure>

                    <figure className={styles.contShield}>
                        <img src={country.shield} alt="escudo" />
                    </figure>
                </div>

            </div>

            <div className={styles.Info}>
                <div className={styles.country}>
                    <h2>{country.name}</h2>
                    <p><b>Continente: </b> {country.continent}</p>
                    <p><b>Región: </b> {country.region}</p>
                    <p><b>Capital: </b> {country.capital}</p>
                    <p><b>Area: </b> {country.area}</p>
                    <p><b>Población: </b> {country.population}</p>
                    <p><a href={country.info} target='_blank'>Información Adicional</a></p>

                </div>

            </div>

            <div className={styles.Activity}>
            {
                        country.activities?.[posc] ?
                                <button type='button' onClick={(e) => handlePrevious(e)}><p>{'<'}</p></button>
                            : null
                    }
                <div className={styles.activities}>
                    <h2>Actividades</h2>
                    {
                        country.activities?.[posc] ?
                            <>
                                <ul>
                                    <p><b>{country.activities[posc].name}</b></p>
                                    <li><b>Dificultad: </b>{country.activities[posc].dificulty}</li>
                                    <li><b>Duración: </b>{country.activities[posc].duration} Horas</li>
                                    <li><b>Temporada: </b>{country.activities[posc].season}</li>
                                </ul>
                                <p>actividad {posc + 1} de {country.activities.length}</p>
                            </>
                            : null
                    }
                </div>
                    {
                        country.activities?.[posc] ?
                                <button type='button' onClick={(e) => handleNext(e)}><p>{'>'}</p></button>
                            : null
                    }
            </div>

            <div className={styles.nada}></div>
            <div className={styles.nada2}></div>
            <div className={styles.nada3}></div>
            <div className={styles.Contenido}></div>
            <div className={styles.nada4}></div>


        </div>
    )
}

export default Country;