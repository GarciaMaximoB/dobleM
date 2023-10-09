import React from 'react';
import { useTranslation } from 'react-i18next';
import images from '../assets/data'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


function Services() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Función para actualizar el estado del ancho de la ventana
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        // Agregar un event listener para escuchar cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize);
        // Limpieza del event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const dragConstraints = {
        right: 0,
        left: -windowWidth -200,
    };

    const { t } = useTranslation();
    const defaultService = { nombre: 'Relaciones Publicas', descripcion: 'Desarrollamos estrategias de relaciones públicas efectivas para mejorar tu reputación y conectar con tu público objetivo.' }
    const services1 = [
        { nombre: t('s-re-pub'), descripcion: t('s-desc-re') },
        { nombre: t('s-co-man'), descripcion: t('s-desc-co') },
        { nombre: t('s-br'), descripcion: t('s-desc-br') },
        { nombre: t('s-as-ge'), descripcion: t('s-desc-as') },
    ]

    const services2 = [
        { nombre: t('s-co-cre'), descripcion: t('s-desc-cont') },
        { nombre: t('s-fo-vid'), descripcion: t('s-desc-fo') },
        { nombre: t('s-so-med'), descripcion: t('s-desc-so') },
        { nombre: t('s-br-pr'), descripcion: t('s-desc-brpr') }
    ]
    const [servicioSeleccionado, setServicioSeleccionado] = useState(defaultService);

    const handleClick = (index, service) => {
        setServicioSeleccionado(service[index]);
        console.log(service[index])
    };

    return (
        <div className='content'>
            <div className='servicios-section'>
                <div className='servicios-container'>
                    <h1 className='heading-sections services-title'>{t('servicios-title')}</h1>

                    <ul className="servicios-list">
                        {services1.map((service, index) => (
                            <li key={index}>
                                <button onClick={() => handleClick(index, services1)} className='servicios-link'>{service.nombre}</button>
                            </li>
                        ))}
                    </ul>

                    <ul className="servicios-list">
                        {services2.map((service, index) => (
                            <li key={index}>
                                <button onClick={() => handleClick(index, services2)} className='servicios-link'>{service.nombre}</button>
                            </li>
                        ))}
                    </ul>

                    {servicioSeleccionado && (
                        <div className='descripcion-servicio'>
                            <p className='servicio-paragraph' >{servicioSeleccionado.descripcion}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='clientes-section' id='clients'>
                <div className='clientes-container'>

                    <h1 className='heading-sections'>{t('clientes-title')}</h1>

                    <motion.div className='carousel'>
                        <motion.div className='slider' drag='x' dragConstraints={dragConstraints}>
                            <div className='row'>
                                {images.slice(0, 10).map((image, index) => (
                                    <motion.div className='item' key={index}>
                                        <img src={image} alt="" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className='row'>
                                {images.slice(10, 20).map((image, index) => (
                                    <motion.div className='item' key={index}>
                                        <img src={image} alt="" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className='row'>
                                {images.slice(20, 30).map((image, index) => (
                                    <motion.div className='item' key={index}>
                                        <img src={image} alt="" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>



    );
}

export default Services;