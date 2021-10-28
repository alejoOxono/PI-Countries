import { NavLink } from 'react-router-dom';


const AllCountries = ({ el }) => {



    return (
        <>
            <NavLink to={`/countries/${el.id}`}>
                <p>{el.name}</p>
            </NavLink>

            <img src={el.flag ? el.flag : 'no existe'} alt='flag' />
            <p>{el.id}</p>
            <p>{el.population}</p>
            <p>{el.capital}</p>
        </>

    )

}

export default AllCountries;