import { Link } from "react-router-dom";
import styles from '../css-module/Nav.module.css';
import Activity from "./Activity";
import logo from "../assets/logo_size.jpg";
import logoInvert from "../assets/logo_size_invert.png";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { visual } from "../actions/actionsCreator";

const Nav = () => {

    const valueVisual = useSelector((state) => state.valueVisual);
    const dispatch = useDispatch();

    const handleDark = (e) => {
        e.preventDefault()
        dispatch(visual(true));
    }

    const handleWhite = (e) => {
        e.preventDefault()
        dispatch(visual(false));
    }

    return (
        <nav className={valueVisual ? styles.allDark : styles.all}>
            <figure className={styles.contFig}>
                <Link to='/'> {valueVisual ? <img src={logoInvert} alt="logo" /> : <img src={logo} alt="logo" />} </Link>
            </figure>
            <div className={styles.links}>

                <div className={valueVisual ? styles.homeDark : styles.home}>
                    <Link activeClassName="current" className={styles.linkCountries} to='/countries'>
                        <p style={{ textDecoration: 'none' }}>Home</p>
                    </Link>
                </div>

                <div className={styles.activity}>
                    <Activity />
                </div>

                <div className={styles.visual}>
                    {/* Creditos de creative commons por el icono https://fontawesome.com/ */}
                    <figure className={styles.iconos}>
                        {!valueVisual ? <img src={moon} alt='moon' onClick={e => handleDark(e)} /> : null}
                        {valueVisual ? <img src={sun} alt='sun' className={styles.sun} onClick={e => handleWhite(e)} /> : null}
                        {/* Creditos de creative commons por el icono https://fontawesome.com/ */}
                    </figure>
                </div>

                <div className={valueVisual ? styles.adicionDark : styles.adicion}>
                    <div className={valueVisual ? styles.adicion2Dark : styles.adicion2}>
                        <div className={valueVisual ? styles.adicion3Dark : styles.adicion3}>
                            <div className={valueVisual ? styles.adicion4Dark : styles.adicion4}></div>
                        </div>
                    </div>
                </div>

            </div>
        </nav >


    )
}

export default Nav;