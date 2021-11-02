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

    return (
        <div className={styles.gridContainer}>
            <Link to='/countries'>
                <button type='button'>Comenzar</button>
            </Link>
        </div>
    )
}

export default LandPage;