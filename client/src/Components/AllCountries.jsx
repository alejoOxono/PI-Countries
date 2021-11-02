import { Link } from 'react-router-dom';
import styles from '../css-module/AllCountries.module.css'
const AllCountries = ({ el }) => {


    return (
        <div className={styles.all}>
            <Link to={`/countries/${el.id}`}>
                <p>{el.name}</p>
            </Link>

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