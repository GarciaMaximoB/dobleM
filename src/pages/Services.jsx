import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Services() {
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
    );
}

export default Services;