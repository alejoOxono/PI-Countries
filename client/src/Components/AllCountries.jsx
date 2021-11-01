import { Link  } from 'react-router-dom';
import styles from '../css-module/AllCountries.module.css'
const AllCountries = ({ el }) => {


    return (
        <>
            <Link to={`/countries/${el.id}`}>
                <p>{el.name}</p>
            </Link>

            <img src={el.flag} alt='flag' />
            <p>{el.region}</p>
            <p>{el.capital}</p>
            <p>{el.population}</p>
        </>

    )

}

export default AllCountries;