import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCountries } from '../actions/actionsCreator'
import styles from '../css-module/Intro.module.css'


const Intro = () => {
    const countries = useSelector((state) => state.dataBaseCountry)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return (
        <div className={styles.gridContainer}>
            <NavLink to='/countries'>
                <button>Comenzar</button>
            </NavLink>
        </div>
    )
}

export default Intro;