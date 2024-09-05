import React, { useRef } from 'react';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './propositos.module.css';
import Alm from '../../assets/img/almacen.png';
import Fab from '../../assets/img/fabrica.png';
import Carb from '../../assets/img/cardbanderas.png';
import Pla from '../../assets/img/planeta.png';

const Propositos = () => {
    const { t } = useTranslation();

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center"]
    });

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        });

        const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
        const y1 = useTransform(scrollYProgress, [0, 1], [200, 0]);
        const y2 = useTransform(scrollYProgress, [0, 1], [350, 0]);
        const y3 = useTransform(scrollYProgress, [0, 1], [500, 0]);

    return(
        <section className={ styles.container }>
            <h2 className={ styles.titproposito }>{t('propositos.creando_titulo')}</h2>
            <div ref={targetRef} className={ styles.cardcontainer }>
                <motion.div style={{ opacity }} className={ styles.card }>
                    <div className={ styles.imagenes1 }>
                        <img alt="Almacén" src={ Alm }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardOne_titulo')}</h3>
                        <p>{t('propositos.cardOne_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity, y: y1 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes2 }>
                        <img alt="Fábrica" src={ Fab }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardTwo_titulo')}</h3>
                        <p>{t('propositos.cardTwo_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity, y: y2 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes3 }>
                    <img alt="Banderas" src={ Carb }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardThree_titulo')}</h3>
                        <p>{t('propositos.cardThree_texto')}</p>
                    </div>
                </motion.div>
                <motion.div
                    style={ {opacity, y: y3 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes4 }>
                        <img alt="Planeta" src={ Pla }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardFour_titulo')}</h3>
                        <p>{t('propositos.cardFour_texto')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Propositos;