import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../actions/actionsCreator'
import styles from '../css-module/Activity.module.css'
import Form from './Form'
import { useHistory } from 'react-router-dom'


const Activity = () => {
    const history = useHistory();
    const valueVisual = useSelector((state) => state.valueVisual);

    const [activity, setActivity] = useState({
        country: [],
        name: '',
        dificulty: '',
        duration: '',
        season: ''
    })

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
        setActivity({
            country: [],
            name: '',
            dificulty: '',
            duration: '',
            season: ''
        })
        history.goBack()
    }

    const handleCountries = (e) => {
        setActivity({
            ...activity,
            country: [...activity.country, e.target.value]
        })
    }

    return (
        <>
            <a className={valueVisual ? styles.linkActivityDark : styles.linkActivity} href="#activity">Actividades</a>
            <div id='activity' className={styles.modal}>
                <div className={valueVisual ? styles.modalContenidoDark : styles.modalContenido} >
                    <a href="#">X</a>
                    <h1 style={{ textAlign: 'center' }}>Crear Actividad</h1>
                    <p>Con esta forma podrás indicar que actividades de interés
                        se pueden realizar en algún país y detallarles ciertas características</p>

                    <Form activity={activity} handleCountries={handleCountries}
                         handleForm={handleForm} formSubmit={formSubmit} />
                </div>
            </div>
        </>

    )
}


export default Activity;