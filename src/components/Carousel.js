import React from "react";

import { Link } from 'react-router-dom';
import Portada  from "../../src/assets/portada.jpg";
import Portada2  from "../../src/assets/portada2.jpg";
import Portada3  from "../../src/assets/portada3.jpg";


const Carousel = () =>{
    return (
   <div>
<div id="carouselExampleIndicators" classclassName="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Link to="/Vajilla"><img src={Portada} className="d-block w-100" alt=""/></Link>
    </div>
    <div class="carousel-item">
    <Link to="/TazasyTazones"><img src={ Portada2} className="d-block w-100" alt=""/></Link>
    </div>
    <div className="carousel-item">
    <Link to="/Vajilla"><img src= {Portada3} className="d-block w-100" alt=""/></Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}

export default Carousel;
