import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { countrySelected } from '../actions/actionsCreator';
import styles from '../css-module/Country.module.css';
import Nav from './Nav';


const Country = () => {
    const { id } = useParams();
    const country = useSelector((state) => state.countryPage);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(countrySelected(id))
    }, [dispatch])


    return (
        <div className={styles.gridContainer}>
            <div className={styles.Nav}>
                <Nav />
            </div>
            <div className={styles.nada}></div>
            <div className={styles.nada2}></div>
            <div className={styles.nada3}></div>
            <div claclassNamess={styles.Map}>
                <img src={country.map} alt='MAP NOT FOUND' />
            </div>
            <div className={styles.Info}>
                my info
                <h2>Actividades</h2>
                {country.activities?.map((activity) => {
                    return <>
                        <ul>
                            <p>{activity.name}</p>
                            <li>{activity.dificulty}</li>
                            <li>{activity.duration}</li>
                            <li>{activity.season}</li>
                        </ul>
                    </>
                })}
            </div>
            <div className={styles.Simbolos}></div>

            <figure>
                <img src={country.flag} alt="bandera" />
            </figure>

            <figure>
                <img src={country.shield} alt="escudo" />
            </figure>

            <div className={styles.nada4}></div>
            <div className={styles.Footer}></div>
        </div>
    )
}

export default Country;