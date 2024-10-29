import React from "react";
import { useTranslation } from "react-i18next";
import images from "../assets/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import i18n from "i18next";
import mapa from "../assets/mapa.png";

function Services() {
  const idioma = localStorage.getItem("language");
  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      console.log(savedLanguage);
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dragConstraints = {
    right: 0,
    // left: -windowWidth - 100,
    left: windowWidth < 800 ? -windowWidth - 500 : -windowWidth - 200,
  };

  const chunkArrayIntoRows = (array, rows) => {
    const chunkSize = Math.ceil(array.length / rows);
    const chunks = [];

    for (let i = 0; i < rows; i++) {
      if (i === rows - 1) {
        chunks.push(array.slice(i * chunkSize));
      } else {
        chunks.push(array.slice(i * chunkSize, i * chunkSize + chunkSize));
      }
    }

    return chunks;
  };

  const imageChunks = chunkArrayIntoRows(images, 3);

  const defaultService = {
    nombre:
      idioma === "es" || null ? "Relaciones Publicas" : "Public relations",
    descripcion:
      idioma === "es"
        ? "Desarrollamos estrategias de relaciones públicas efectivas para mejorar tu reputación y conectar con tu público objetivo."
        : "We develop effective public relations strategies to improve your reputation and connect with your target audience.",
  };

  const services1 = [
    { nombre: t("s-re-pub"), descripcion: t("s-desc-re") },
    { nombre: t("s-co-man"), descripcion: t("s-desc-co") },
    { nombre: t("s-br"), descripcion: t("s-desc-br") },
    { nombre: t("s-as-ge"), descripcion: t("s-desc-as") },
  ];

  const services2 = [
    { nombre: t("s-co-cre"), descripcion: t("s-desc-cont") },
    { nombre: t("s-fo-vid"), descripcion: t("s-desc-fo") },
    { nombre: t("s-so-med"), descripcion: t("s-desc-so") },
    { nombre: t("s-br-pr"), descripcion: t("s-desc-brpr") },
  ];
  const [servicioSeleccionado, setServicioSeleccionado] =
    useState(defaultService);

  const handleClick = (index, service) => {
    setServicioSeleccionado(service[index]);
    console.log(service[index]);
  };

  console.log(images);

  return (
    <div className="content">
      <div className="servicios-section">
        <div className="servicios-container">
          <h1 className="heading-sections services-title">
            {t("servicios-title")}
          </h1>
          <ul className="servicios-list">
            {services1.map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(index, services1)}
                  className="servicios-link"
                >
                  {service.nombre}
                </button>
              </li>
            ))}
          </ul>

          <ul className="servicios-list">
            {services2.map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => handleClick(index, services2)}
                  className="servicios-link"
                >
                  {service.nombre}
                </button>
              </li>
            ))}
          </ul>

          {servicioSeleccionado && (
            <div className="descripcion-servicio">
              <p className="servicio-paragraph">
                {servicioSeleccionado.descripcion}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="where-section">
        <h1>¿DONDE ESTAMOS?</h1>
        <img src={mapa} alt="" />
      </div>

      <div className="clientes-section" id="clients">
        <div className="clientes-container">
          <h1 className="heading-sections">{t("clientes-title")}</h1>

          <motion.div className="carousel">
            <motion.div
              className="slider"
              drag="x"
              dragConstraints={dragConstraints}
            >
              {imageChunks.map((chunk, rowIndex) => (
                <div
                  className={`row ${
                    rowIndex === imageChunks.length - 1 && chunk.length < 15
                      ? "row-centered"
                      : ""
                  }`}
                  key={rowIndex}
                >
                  {chunk.map((image, index) => (
                    <motion.div className="item" key={index}>
                      <img src={image} alt={`Imagen ${index}`} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <h2>← {t("slider-text")} →</h2>
        </div>
      </div>
    </div>
  );
}

export default Services;
