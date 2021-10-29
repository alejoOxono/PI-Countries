import { Link } from 'react-router-dom';


const AllCountries = ({ el }) => {



    return (
        <>
            <Link to={`/countries/${el.id}`}>
                <p>{el.name}</p>
            </Link>

            <img src={el.flag} alt='flag' />
            {/* <img src={el.map} alt='MAP NOT FOUND' /> */}
            <p>{el.id}</p>
            <p>{el.population}</p>
            <p>{el.capital}</p>
        </>

    )

}

export default AllCountries;