import React, { useRef } from 'react';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import styles from './propositos.module.css';
import Alm from '../../assets/img/almacen.png';
import Fab from '../../assets/img/fabrica.png';
import Carb from '../../assets/img/cardbanderas.png';
import Pla from '../../assets/img/planeta.png';

const Propositos = () => {
    const { t } = useTranslation();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const webRef = useRef(null);
    const mobileRef1 = useRef(null);
    const mobileRef2 = useRef(null);
    const mobileRef3 = useRef(null);
    const mobileRef4 = useRef(null);
    const targetRef1 = isMobile ? mobileRef1 : webRef;
    const targetRef2 = isMobile ? mobileRef2 : webRef;
    const targetRef3 = isMobile ? mobileRef3 : webRef;
    const targetRef4 = isMobile ? mobileRef4 : webRef;

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef1,
        offset: ["start end", "end 85%"]
    });
    
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: ["start end", "end 85%"]
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
        offset: ["start end", "end 85%"]
    });
    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: targetRef4,
        offset: ["start end", "end 85%"]
    });
    useMotionValueEvent(scrollYProgress2, "change",
        (latest) => {
            console.log(latest)
        });

    const opacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);
    const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
    const opacity3 = useTransform(scrollYProgress3, [0, 1], [0, 1]);
    const opacity4 = useTransform(scrollYProgress4, [0, 1], [0, 1]);
    const y1 = useTransform(scrollYProgress2, [0, 1], [200, 0]);
    const y2 = useTransform(scrollYProgress3, [0, 1], [350, 0]);
    const y3 = useTransform(scrollYProgress4, [0, 1], [500, 0]);

    return(
        <section className={ styles.container }>
            <motion.h2 ref={targetRef1} style={{opacity: opacity1}} className={ styles.titproposito }>{t('propositos.creando_titulo')}</motion.h2>
            <div className={ styles.cardcontainer }>
                <motion.div style={{ opacity: opacity1 }} className={ styles.card }>
                    <div className={ styles.imagenes1 }>
                        <img alt="Almacén" src={ Alm }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardOne_titulo')}</h3>
                        <p>{t('propositos.cardOne_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity: opacity2, y: y1 }}
                    className={ styles.card }
                >
                    <div ref={targetRef2} className={ styles.imagenes2 }>
                        <img alt="Fábrica" src={ Fab }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardTwo_titulo')}</h3>
                        <p>{t('propositos.cardTwo_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity: opacity3, y: y2 }}
                    className={ styles.card }
                >
                    <div ref={targetRef3} className={ styles.imagenes3 }>
                    <img alt="Banderas" src={ Carb }></img>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardThree_titulo')}</h3>
                        <p>{t('propositos.cardThree_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity: opacity4, y: y3 }}
                    className={ styles.card }
                >
                    <div ref={targetRef4} className={ styles.imagenes4 }>
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