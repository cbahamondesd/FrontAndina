import React, { useRef, forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './viveProposito.module.css';
import mundo from '../../assets/img/mundo.png';

// Agregamos forwardRef para aceptar la referencia desde el componente padre
const ViveProposito = forwardRef((props, ref) => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const mobileRef1 = useRef(null);
    const desktopRef1 = useRef(null);
    const targetRef1 = isMobile ? mobileRef1 : desktopRef1;

    const mobileRef2 = useRef(null);
    const desktopRef2 = useRef(null);
    const targetRef2 = isMobile ? mobileRef2 : desktopRef2;

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef1,
        offset: ["50% end", "center"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: ["50% end", "center"]
    });

    const opacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);
    const y1 = useTransform(scrollYProgress1, [0, 1], [150, 0]);
    const y2 = useTransform(scrollYProgress1, [0, 1], [300, 0]);
    const y3 = useTransform(scrollYProgress1, [0, 1], [450, 0]);
    const y4 = useTransform(scrollYProgress1, [0, 1], [600, 0]);

    const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
    const y5 = useTransform(scrollYProgress2, [0, 1], [150, 0]);
    const y6 = useTransform(scrollYProgress2, [0, 1], [200, 0]);
    const y7 = useTransform(scrollYProgress2, [0, 1], [250, 0]);
    const y8 = useTransform(scrollYProgress2, [0, 1], [300, 0]);

    return(
        <section ref={ref} className={styles.vivePropositoContainer}>
            <div className={styles.titulo}>
                <div className={styles.titulo1}>
                    <img alt="Planeta Tierra" src={mundo} />
                    <h1>{t('viveProposito.titulo')}</h1>
                </div>
                <h3 ref={mobileRef1}>{t('viveProposito.bajada_vivo')}</h3>
            </div>
            <div className={styles.cardsContainer}>
                <div ref={desktopRef1} className={styles.cardsRow}>
                    <motion.div style={{ opacity: opacity1, y: y1 }} className={styles.card}>
                        <div className={styles.imagenes}>
                            <div>
                                <iframe
                                    src={t('viveProposito.enlace')}
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                </iframe>
                            </div>
                        </div>
                        <div className={styles.cardText}>
                            <h4>{t('viveProposito.cardOne_titulo')}</h4>
                            <p>{t('viveProposito.cardOne')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default ViveProposito;
