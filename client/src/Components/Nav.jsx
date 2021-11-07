import { Link } from "react-router-dom";
import styles from '../css-module/Nav.module.css';
import Activity from "./Activity";
import logo from "../assets/logo_size.jpg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const Nav = () => {
    return (
        <nav className={styles.all}>
            <figure className={styles.contFig}>
                <Link to='/'> <img src={logo} alt="logo" /> </Link>
            </figure>
            <div className={styles.links}>

                <div className={styles.home}>
                    <Link activeClassName="current" className={styles.linkCountries} to='/countries'>
                        <p style={{ textDecoration: 'none' }}>Home</p>
                    </Link>
                </div>

                <div className={styles.activity}>
                    <Activity />
                </div>


                {/* Creditos de creative commons por el icono https://fontawesome.com/ */}
                <figure className={styles.linkedin}>
                    <img src={moon} alt='moon' />
                    {/* Creditos de creative commons por el icono https://fontawesome.com/ */}
                </figure>

                <div className={styles.adicion}>
                    <div className={styles.adicion2}>
                        <div className={styles.adicion3}>
                            <div className={styles.adicion4}></div>
                        </div>
                    </div>
                </div>

            </div>
        </nav >


    )
}

export default Nav;