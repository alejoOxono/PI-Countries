import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from '../css-module/Carousel.module.css'

const Carousel = () => {
    
    const valueVisual = useSelector((state) => state.valueVisual);

    const [imag, setImag] = useState([]);
    const countries = useSelector((state) => state.dataBaseCountry);

    const len = countries.length;
    const arryCtrl = [1, 2, 3, 4, 5, 6, 7];

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getFlag = () => {
        let flag = countries[getRandomInt(len)]
        return flag?.flag
    }

    const getShield = () => {
        let shield = countries[getRandomInt(len)]
        return shield?.shield
    }


    return (
        <div className={valueVisual ? styles.allDark : styles.all}>
            <div className={valueVisual ? styles.sliderDark : styles.slider}>
                <div className={styles.slideTrack}>
                    {arryCtrl.map((el) => {
                        return<>

                            <div className={styles.slide}>
                                <img className={styles.flagImg} src={getFlag()} alt="" />
                            </div>
                            <div className={styles.slide}>
                                <img className={styles.shieldImg} src={getShield()} alt="" />
                            </div>
                           
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;