import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../actions/actionsCreator'
import styles from '../css-module/Activity.module.css'
import Form from './Form'
import { useHistory } from 'react-router-dom'


const Activity = () => {
    const history = useHistory();

    const [activity, setActivity] = useState({
        country: [],
        name: '',
        dificulty: '',
        duration: '',
        season: ''
    })

    const [countriesSelected, setCountriesSelected] = useState([])

    const countries = useSelector((state) => state.dataBaseCountry);
    const dispatch = useDispatch();

    const handleForm = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addActivity(activity));
        setCountriesSelected([])
        setActivity({
            ...activity,

        })
        history.goBack()
    }


    const handleCountries = (e) => {
        setCountriesSelected({
            ...countriesSelected,
            country: e.target.value
        })
    }

    const submitCountries = (e) => {
        e.preventDefault();
        setActivity({
            ...activity,
            country: [...activity.country, countriesSelected.country]
        })
    }


    return (
        <>
            <a className={styles.linkActivity} href="#activity">Actividades</a>
            <div id='activity' className={styles.modal}>
                <div className={styles.modalContenido}>
                    <a href="#">X</a>
                    <h1>Crear Actividad</h1>
                    <p>Con esta forma podrás indicar que actividades de interés
                        se pueden realizar en algún país y detallarles ciertas características</p>

                    <Form activity={activity} handleCountries={handleCountries}
                        submitCountries={submitCountries} handleForm={handleForm} formSubmit={formSubmit} />
                </div>
            </div>
        </>

    )
}


export default Activity;