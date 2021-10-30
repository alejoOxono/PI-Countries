import styles from '../css-module/Activity.module.css'


const Activity = () => {
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
                    
                </div>
            </div>
        </>

    )
}


export default Activity;