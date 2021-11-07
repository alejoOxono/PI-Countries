import styles from '../css-module/Footer.module.css'
import linkedin from '../assets/linkedinWhite.svg'

const Footer = () => {
    return (
        <div className={styles.all}>
            <figure className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/alejandro-c-6754611a5/" target='_blank'>
                    <img src={linkedin} alt='linkedin' />
                     {/* Creditos de creative commons por el icono https://fontawesome.com/ */}
                </a>
            </figure>
            <div className={styles.nombre}>
                <p>By Alejandro Cardona</p>
            </div>

        </div>
    )
}

export default Footer;