import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { 
    motion, 
    useScroll,
    useTransform,
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './transicion.module.css';
import bebida from '../../assets/img/bebida_media.png';
import nube from '../../assets/img/nube.png';

const Transicion = () => {
    const { t } = useTranslation();

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const textoRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textoRef,
        offset: ["start end", "end 75%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const x1 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const x3 = useTransform(scrollYProgress, [0, 1], isMobile ? [-200, 0] : [100, 0]);
    const x4 = useTransform(scrollYProgress, [0, 1], isMobile ? [200, 0]: [-100, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [300, 0]);

    return(
        <section className={ styles.transicion }>
            <div className={styles.contenedorSecciones}>
                <div ref={textoRef} className={ styles.ladoIzquierdo }>
                    <motion.h2 style={{ x: x3 }}>{t('transicion.izquierda')}</motion.h2>
                </div>
                <div className={ styles.ladoDerecho }>
                    <motion.h2 style={{ x: x4 }} >{t('transicion.derecha')}</motion.h2>
                </div>
                <div className={ styles.centro }>
                    <motion.img 
                        style={{ opacity, y }} 
                        className={ styles.bebidaWeb } 
                        src={ bebida }
                        alt='Botella de bebida'
                        loading='lazy'
                    ></motion.img>
                </div>
            </div>
            <div className={ styles.contenedorBebidaMovil }>
                <motion.img
                        style={{ opacity, y }} 
                        className={ styles.bebidaMovil } 
                        src={ bebida }
                        alt='Botella de bebida'
                        loading='lazy'
                ></motion.img>
            </div>
            <motion.img style={{ opacity, x: x1 }} className={ styles.nube } src={ nube }></motion.img>
            <motion.img style={{ opacity, x: x1 }} className={ styles.nube } src={ nube }></motion.img>
            <motion.img style={{ opacity, x: x2 }} className={ styles.nube } src={ nube }></motion.img>
            <motion.img style={{ opacity, x: x2 }} className={ styles.nube } src={ nube }></motion.img>
        </section>
    );
};

export default Transicion;