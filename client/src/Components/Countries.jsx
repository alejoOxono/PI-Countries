import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/actionsCreator';
import Carousel from './Carousel';
import Nav from './Nav';
import '../css-module/Countries.css'
import AllCountries from './AllCountries';
import Search from './Search';
import Footer from './Footer';

const Countries = () => {
    var body = 0;
    const countries = useSelector((state) => state.dataBaseCountry)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [])

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

            <div className='Search'>
                <Search/>
            </div>

            {countries.map((el) => {
                return (
                    <div className={bodyIter()}>
                        <AllCountries el={el} />
                    </div>
                )
            })}

            <div className="nada2"></div>
            <div className='Paginacion'>

            </div>
            <div className='Footer'>
                <Footer/>
            </div>
        </div>

    )
}


export default Countries;