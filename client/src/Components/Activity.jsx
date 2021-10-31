import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivity } from '../actions/actionsCreator'
import styles from '../css-module/Activity.module.css'


const Activity = () => {
    const [activity, setActivity] = useState({
        country: '',
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

    const formSubmit = (e) =>{
        console.log(activity)
        e.preventDefault();
        dispatch(addActivity(activity));
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
                    <form onChange={(e) => handleForm(e)}>

                        <div>
                            <label htmlFor="name">Nombre de actividad: </label>
                            <input type='text' placeholder='Actividad...' name='name' />
                        </div>

                        <div>
                            <fieldset>
                                <legend>Dificultad</legend>
                                <label htmlFor="dificulty">1</label>
                                <input type='radio' name='dificulty' value='1' />
                                <label htmlFor="dificulty">2</label>
                                <input type='radio' name='dificulty' value='2' />
                                <label htmlFor="dificulty">3</label>
                                <input type='radio' name='dificulty' value='3' />
                                <label htmlFor="dificulty">4</label>
                                <input type='radio' name='dificulty' value='4' />
                                <label htmlFor="dificulty">5</label>
                                <input type='radio' name='dificulty' value='5' />
                            </fieldset>
                        </div>
                        <div>
                            <label htmlFor="duration">Duración de actividad: </label>
                            <input type='text' placeholder='Duración en Horas...' name='duration' />
                        </div>

                        <div>
                            <fieldset>
                                <legend>Temporada</legend>
                                <label htmlFor="season">Verano</label>
                                <input type='radio' name='season' value='verano' />
                                <label htmlFor="dificulty">Otoño</label>
                                <input type='radio' name='season' value='otoño' />
                                <label htmlFor="dificulty">Invierno</label>
                                <input type='radio' name='season' value='invierno' />
                                <label htmlFor="dificulty">Primavera</label>
                                <input type='radio' name='season' value='primavera' />
                            </fieldset>
                        </div>

                        <div>
                            <label htmlFor="country">Seleccionar Paises: </label>
                            <input type='text' list='country' name='country' />
                            <datalist id='country'>
                                {countries.map((country) =>
                                    <option value={country.name} />
                                )}
                            </datalist>
                            <button type='button' onClick>Añadir País</button>
                        </div>
                        <div>
                            <button type='submit' onClick={(e) => formSubmit(e)}>Añadir Actividad</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}


export default Activity;