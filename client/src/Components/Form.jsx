import { useSelector } from "react-redux";
import styles from '../css-module/Form.module.css'

const Form = ({ activity, handleCountries, submitCountries, handleForm, formSubmit }) => {
    const countries = useSelector((state) => state.dataBaseCountry);

    return (
        <div className={styles.gridContainer}>

            <div className={styles.countries}>
                <div className={styles.seleccion}>
                    <form onChange={(e) => handleCountries(e)}>
                        <label htmlFor="country">Seleccionar Paises: </label>
                        <input type='text' list='country' name='country' />
                        <datalist id='country'>
                            {countries.map((country) =>
                                <option value={country.id} />
                            )}
                        </datalist>
                        <button type='submit' onClick={(e) => submitCountries(e)}>Añadir</button>
                    </form>
                </div>

                <div className={styles.agregados}>
                    <ul>
                        {activity.country?.map((el) => {
                            return <span>{el} + </span>
                        })}
                    </ul>
                </div>
            </div>

            <div className={styles.form}>
                <form onChange={(e) => handleForm(e)}>

                    <div className={styles.actividad}>

                        <label htmlFor="name">Nombre de actividad: </label>
                        <input type='text' placeholder='Actividad...' name='name' />
                    </div>

                    <div className={styles.duracion}>
                        <label htmlFor="duration">Duración de actividad: </label>
                        <input type='text' placeholder='Duración en Horas...' name='duration' />
                    </div>

                    <div className={styles.dificultad}>
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

                    <div className={styles.temporada}>
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

                    <div className={styles.submit}>
                        <button type='submit' onClick={(e) => formSubmit(e)}>Añadir Actividad</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;