import { useSelector } from "react-redux";
import styles from '../css-module/Form.module.css'

const Form = ({ activity, handleCountries, handleForm, formSubmit }) => {
    const countries = useSelector((state) => state.dataBaseCountry);
    const valueVisual = useSelector((state) => state.valueVisual);

    const reg = new RegExp('^[0-9]+$');
    const regEx = new RegExp(/^[A-Za-z]+$/);

    const pushCountries = (country) => {
        if (country.length > 0) return null
        if (regEx.test(country)) return null
        else return 'Introducir País'
    }


    return (
        <div className={valueVisual ? styles.gridContainerDark : styles.gridContainer}>

            <div className={styles.countries}>
                <div className={styles.seleccion}>
                    <form onChange={(e) => handleCountries(e)}>
                        <label className={valueVisual ? styles.labelDark : null} htmlFor="country">Seleccionar Paises: </label>
                        <select className={styles.selectCountries} id='country'>
                            <option disabled selected>Selección de países</option>
                            {countries.map((country) =>
                                <option className={styles.optionCountries} value={country.id} > {country.name} </option>
                            )}
                        </select>
                    </form>
                </div>
                <div className={styles.warning}><p>{pushCountries(activity.country)}</p></div>
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
                        <label className={valueVisual ? styles.labelDark : null} htmlFor="name">Nombre de actividad: </label>
                        <input required type='text' placeholder='Actividad...' name='name' />
                    </div>
                    <div className={styles.warning}><p>{regEx.test(activity.name) ? null : 'Introducir nombre de actividad'}</p></div>


                    <div className={styles.duracion}>
                        <label className={valueVisual ? styles.labelDark : null} htmlFor="duration">Duración de actividad: </label>
                        <input type='text' placeholder='Duración en Horas...' name='duration' />
                    </div>
                    <div className={styles.warning}><p>{reg.test(activity.duration) ? null : 'Introducir duración de actividad en cantidad de horas'}</p></div>

                    <div className={styles.dificultad}>
                        <fieldset>
                            <legend>Dificultad</legend>
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">1</label>
                            <input type='radio' name='dificulty' value='1' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">2</label>
                            <input type='radio' name='dificulty' value='2' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">3</label>
                            <input className={valueVisual ? styles.labelDark : null} type='radio' name='dificulty' value='3' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">4</label>
                            <input className={valueVisual ? styles.labelDark : null} type='radio' name='dificulty' value='4' />
                            <label htmlFor="dificulty">5</label>
                            <input className={valueVisual ? styles.labelDark : null} type='radio' name='dificulty' value='5' />
                        </fieldset>
                    </div>
                    <div className={styles.warning}><p>{activity.dificulty ? null : 'Introducir Dificultad'}</p></div>

                    <div className={styles.temporada}>
                        <fieldset>
                            <legend>Temporada</legend>
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="season">Verano</label>
                            <input type='radio' name='season' value='verano' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">Otoño</label>
                            <input type='radio' name='season' value='otoño' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">Invierno</label>
                            <input type='radio' name='season' value='invierno' />
                            <label className={valueVisual ? styles.labelDark : null} htmlFor="dificulty">Primavera</label>
                            <input type='radio' name='season' value='primavera' />
                        </fieldset>
                    </div>
                    <div className={styles.warning}><p>{activity.season ? null : 'Introducir Temporada'}</p></div>

                    <div className={styles.submit}>
                        <button type='submit' onClick={(e) => formSubmit(e)}><span>Añadir Actividad</span></button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;