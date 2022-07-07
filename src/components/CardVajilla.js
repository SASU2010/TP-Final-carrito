import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import Carrito from "../paginas/Carrito";
import { Link } from "react-router-dom";

function CardVajilla({ imageSource, title, text, precio}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-warning">
          {text
            ? text
            : "Estamos Actualizando los detalles."}
        </p>
        <h4>Precio: {precio}</h4>
        <Link  to="/carrito" {...<Carrito/>} className="btn btn-outline-secondary border-0" rel="noreferrer" >Comprame </Link>
      </div>
    </div>
  );
}

CardVajilla.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  precio: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardVajilla;