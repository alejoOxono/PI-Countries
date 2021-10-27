import { useSelector } from 'react-redux';


const AllCountries = ({el}) => {
    const countries = useSelector((state) => state.dataBaseCountry)

    return (
    <>
        <p>{el.id}</p>
        <p>{el.name}</p>
        <img src={el.flag ? el.flag : 'no existe'} alt='flag' />
        <p>{el.population}</p>
        <p>{el.capital}</p>
    </>

    )

}

export default AllCountries;