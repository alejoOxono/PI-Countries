import '../css-module/Countries.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/actionsCreator';
import Carousel from './Carousel';
import Nav from './Nav';
import AllCountries from './AllCountries';
import Search from './Search';
import Footer from './Footer';
import Pagination from './Pagination';
import Filter from './Filters';

const Countries = () => {

    const countries = useSelector((state) => state.countriesFiltered);
    const dispatch = useDispatch();

    const [orden, setOrden] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(9);
    const lastData = dataPerPage * currentPage;
    const firstData = lastData - dataPerPage;
    const currentCountriesShow = countries.slice(firstData, lastData);

    var body = 0;

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const paginar = (page) => {
        setCurrentPage(page)
    }

    const bodyIter = () => {
        if (body >= 9) {
            body = 1;
            return 'styles.body1'
        }
        else {
            body++;
            return `styles.body${body}`
        }
    }

    return (
        <div className='gridContainer'>

            <div className='Nav'>
                <Nav />
            </div>

            <div className='Imagenes'>
                <Carousel />
            </div>

            <div className="nada"></div>

            <div className='Search'  style={{display:''}}>
                <Filter paginar={paginar} setOrden={setOrden} />
                <Search setOrden={setOrden}/>
            </div>

            {currentCountriesShow.map((el) => {
                return (
                    <div className={bodyIter()}>
                        <AllCountries el={el} />
                    </div>
                )
            })}

            <div className="nada2"></div>
            <div className='Paginacion'>
                <Pagination pageFunction={paginar} data={dataPerPage} current={currentPage} />
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>

    )
}


export default Countries;