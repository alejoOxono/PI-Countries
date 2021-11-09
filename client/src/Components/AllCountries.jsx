import { useSelector } from 'react-redux';
import styles from '../css-module/AllCountries.module.css'

const AllCountries = ({ el }) => {
    const valueVisual = useSelector((state) => state.valueVisual);


    return (
        <div className={valueVisual ? styles.allDark : styles.all}>

            <p style={{ textAlign: 'center' }}><b>{el.name}</b></p>

            <figure className={styles.cuadro}>
                <img src={el.flag} alt='flag' />
            </figure>


            <header className={styles.info}>
                <h4>Region: </h4><span>{el.region}</span>
            </header>

            <header className={styles.info}>
                <h4>Capital: </h4><span>{el.capital}</span>
            </header>

            <header className={styles.info}>
                <h4>Población: </h4><span>{el.population}</span>
            </header>

        </div>

    )

}

export default AllCountries;