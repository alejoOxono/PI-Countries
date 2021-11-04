import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries } from '../actions/actionsCreator'
import styles from '../css-module/LandPage.module.css'


const LandPage = () => {
    const countries = useSelector((state) => state.dataBaseCountry)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const len = countries.length;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getName = () => {
        let name = countries[getRandomInt(len)]
        return name?.name
    }

    return (
        <div className={styles.gridContainer}>
            <div className="nada"></div>
            <div className="nada2"></div>
            <div className="nada3"></div>
            <div className="nada4"></div>
            <div className={styles.back}>
            <Link to='/countries'>
                        <button type='button' className={styles.but}>Comenzar</button>
                    </Link>
            </div>

            <div className={styles.contenido}>
                <div id={styles.container}>

                
                    <div className={styles.textCuatro} id={styles.seis}>{getName()}</div>
                    <div className={styles.textCinco} id={styles.uno}>{getName()}</div>
                    <div className={styles.textDos} id={styles.dos}>{getName()}</div>
                    <div className={styles.textTres} id={styles.tres}>{getName()}</div>
                    <div className={styles.textSeis} id={styles.cuatro}>{getName()}</div>
                    <div className={styles.textCuatro} id={styles.cinco}>{getName()}</div>
                    <div className={styles.textCinco} id={styles.seis}>{getName()}</div>
                    <div className={styles.textDos} id={styles.uno}>{getName()}</div>
                    <div className={styles.text} id={styles.dos}>{getName()}</div>
                    <div className={styles.textTres} id={styles.tres}>{getName()}</div>
                    <div className={styles.textCinco} id={styles.cuatro}>{getName()}</div>
                    <div className={styles.textSeis} id={styles.cinco}>{getName()}</div>
                    <div className={styles.textDos} id={styles.seis}>{getName()}</div>
                    <div className={styles.textTres} id={styles.cinco}>{getName()}</div>

                </div>
            </div>
        </div>
    )
}

export default LandPage;