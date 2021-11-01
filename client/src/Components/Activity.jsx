import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../actions/actionsCreator'
import styles from '../css-module/Activity.module.css'
import Form from './Form'


const Activity = () => {
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
        console.log(activity)
        e.preventDefault();
        dispatch(addActivity(activity));
        setCountriesSelected([])
        setActivity({
            ...activity,
            country: [],
        })
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
            <a className={styles.linkActivity} href="#activity">Crear Actividad</a>
            <div id='activity' className={styles.modal}>
                <div className={styles.modalContenido}>
                    <a href="#">X</a>
                    <h1>Crear Actividad</h1>
                    <p>Con esta forma podrás indicar que actividades turísticas o de interés
                        puedes realizar en cualquier país, delacrar su dificultad,
                        temporada en la que se práctica y cuanto tiempo
                        dura su práctica</p>

                    <Form activity={activity} handleCountries={ handleCountries} 
                    submitCountries={submitCountries} handleForm={handleForm} formSubmit={formSubmit} />
                </div>
            </div>
        </>

    )
}


export default Activity;