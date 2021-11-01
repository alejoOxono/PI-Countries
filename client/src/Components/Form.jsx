import { useSelector } from "react-redux";


const Form = ({ activity, handleCountries, submitCountries, handleForm, formSubmit }) => {
    const countries = useSelector((state) => state.dataBaseCountry);

    return (
        <>
            <form onChange={(e) => handleCountries(e)}>
                <div>
                    <label htmlFor="country">Seleccionar Paises: </label>
                    <input type='text' list='country' name='country' />
                    <datalist id='country'>
                        {countries.map((country) =>
                            <option value={country.id} />
                        )}
                    </datalist>
                    <button type='submit' onClick={(e) => submitCountries(e)}>Añadir País</button>
                </div>
            </form>
            <ul>
                {activity.country?.map((el) => {
                    return <li>{el}</li>
                })}
            </ul>


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
                    <button type='submit' onClick={(e) => formSubmit(e)}>Añadir Actividad</button>
                </div>

            </form>
        </>
    )
}

export default Form;