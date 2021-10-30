import { Link  } from 'react-router-dom';

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