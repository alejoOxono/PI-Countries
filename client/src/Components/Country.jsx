import styles from '../css-module/Country.module.css';
import Nav from './Nav';


const Country = () => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.Nav}>
                <Nav/>
            </div>
            <div className={styles.nada}></div>
            <div className={styles.nada2}></div>
            <div className={styles.nada3}></div>
            <div claclassNamess={styles.Map}></div>
            <div className={styles.Info}>
                my info
            </div>
            <div className={styles.Simbolos}></div>
            <div className={styles.nada4}></div>
            <div className={styles.Footer}></div>
        </div>
    )
}

export default Country;