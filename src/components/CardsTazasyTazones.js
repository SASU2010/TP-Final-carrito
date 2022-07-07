import React from "react";
import CardTazasyTazones from "./CardTazasyTazones";
import Carrito from '../paginas/Carrito';
import Taza1 from "../assets/tazas1.jpg";
import Taza2 from "../assets/tazas2.jpg";
import Taza3 from "../assets/taza3.jpg";

const cards= [
  {
    id: 1,
    title: "Nespresso",
    image: Taza1,
    text: "Siempre se disfruta un buen café en estas tazas - Nuestras piezas son unicas y hechas a mano",
    precio:"$4000",
    url: (<Carrito/>),
  },
  {
    id: 2,
    title: "Tazon",
    image: Taza2,
    text: "Nuestras piezas son unicas - Tanto para sopa o un café con leche",
    precio:"$2700",
    url: (<Carrito/>),
  },
  {
    id: 3,
    title: "Mis Desayunos",
    image: Taza3,
    text: "Para que tus momentos sean unicos - Nuestras piezas son unicas y hechas a mano",
    precio:"$2000",
    url: (<Carrito/>),
  },
];

function CardsTazasyTazones() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, text, precio, url, id }) => (
          <div className="col-md-4" key={id}>
            <CardTazasyTazones imageSource={image} title={title} url={url} text={text} precio={precio}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsTazasyTazones;
