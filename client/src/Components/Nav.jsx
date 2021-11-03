import { Link } from "react-router-dom";
import styles from '../css-module/Nav.module.css'
import Activity from "./Activity";
import logo from "../assets/logo_size.jpg"

const Nav = () => {
    return (
        <nav className={styles.all}>
            <figure className={styles.contFig}>
                <Link to='/'> <img src={logo} alt="hola" /> </Link>
            </figure>
            <div className={styles.links}>

                <div>
                    HOME
                </div>
                
                <div>
                    <Activity />
                </div>

            </div>
        </nav>


    )
}

export default Nav;