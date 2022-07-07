import React from "react";
import CardVajilla from "./CardVajilla";
import Carrito from '../paginas/Carrito';
import Vajilla1 from "../assets/vajilla1.jpg";
import Vajilla2 from "../assets/vajilla2.png";
import Vajilla3 from "../assets/vajilla3.jpg";

const cards = [
  {
    id: 1,
    title: "Bold 2 en 1",
    image: Vajilla1,
    text: "Bold para preparaciones y jarra - Nuestras piezas son unicas y hechas a mano",
    precio:"$5000",
    url: (<Carrito/>),
  },
  {
    id: 2,
    title: "Set de Mesa",
    image: Vajilla2,
    text: "Todas tus comidas van a necesitar estos accesorios en la mesa - Nuestras piezas son unicas y hechas a mano",
    precio:"$3000",
    url: (<Carrito/>),
  },
  {
    id: 3,
    title: "Vajilla para 4 ",
    image: Vajilla3,
    text: "Nuestras piezas son unicas y estos juegos de platoa engalanan cualquier mesa",
    precio:"$25000",
    url: (<Carrito/>),
  },
];

function CardsVajilla() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, text, precio, url, id }) => (
          <div className="col-md-4"  key={id}>
            <CardVajilla imageSource={image} title={title} url={url} text={text} precio={precio}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsVajilla;
