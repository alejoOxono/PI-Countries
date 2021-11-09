import '../css-module/Countries.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/actionsCreator';
import Carousel from './Carousel';
import Nav from './Nav';
import AllCountries from './AllCountries';
import Footer from './Footer';
import Pagination from './Pagination';
import Filter from './Filters';
import { Link } from 'react-router-dom';
import notFound from '../assets/notFound.jpg'

const Countries = () => {

    const valueVisual = useSelector((state) => state.valueVisual);
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
            return 'Body1'
        }
        else {
            body++;
            return `Body${body}`
        }
    }

    return (
        <div className='gridContainer'>

            <div className={valueVisual ? 'NavDark' : 'Nav'}>
                <Nav />
            </div>

            <div className={valueVisual ? 'ImagenesDark' : 'Imagenes'} >
                <Carousel />
            </div>

            <div className={valueVisual ? 'nadaDark' : 'nada'} ></div>

            <div className={valueVisual ? 'SearchDark' : 'Search'} >
                <Filter paginar={paginar} setOrden={setOrden} />
            </div>

            <div className={valueVisual ? 'BodyDark' : 'Body'} >
                {currentCountriesShow.length === 0 ?
                    <div className='notFound'>
                        <figure>
                            <img src={notFound} alt="notFound" />
                        </figure>
                    </div>
                    : null}

            </div>

            {currentCountriesShow.map((el) => {
                return (
                    <div className={bodyIter()}>

                        <Link className='linkCountries' to={`/countries/${el.id}`}>
                            <AllCountries el={el} />
                        </Link>

                    </div>
                )
            })}

            <div className={valueVisual ? 'nada2Dark' : 'nada2'}></div>
            <div className={valueVisual ? 'PaginacionDark' : 'Paginacion'}>
                <Pagination pageFunction={paginar} data={dataPerPage} current={currentPage} />
            </div>
            <div className={valueVisual ? 'FooterDark' : 'Footer'} >
                <Footer />
            </div>
        </div>

    )
}


export default Countries;