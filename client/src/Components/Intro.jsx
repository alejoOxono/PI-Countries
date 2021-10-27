import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        </div>
    )
}

export default Intro;