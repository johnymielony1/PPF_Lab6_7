import React, { Component } from "react";
import "./Legendy.css";
import Carousel from 'react-bootstrap/Carousel'
import img4 from "../res/img4.jpg";
import img1 from "../res/img1.jpg";
import img2 from "../res/img2.jpg";

export const Legendy = () => {
    
    const MouseOverHandler = (event) => {
      event.target.style.backgroundColor = 'lightgrey'
    }
    const MouseOutHandler = (event) => {
      event.target.style.backgroundColor = ''
    }
  return (
    <div className='background'>
    
    <div className="legendy-container">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Porshe 911 964 Targa"
    />
    <Carousel.Caption>
      <h3>Porshe 911 964 Targa</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Mercedes 190"
    />
    <Carousel.Caption>
      <h3>Mercedes 190 w201</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Ford Mustang"
    />
    <Carousel.Caption>
      <h3>Ford Mustang mk1</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <p className='opis' onMouseOver={MouseOverHandler} onMouseOut={MouseOutHandler}>Legendarny sportowy samochód klasy GT, idealny zarówno na trasy jak i tor  </p>
    <p className='opis'onMouseOver={MouseOverHandler} onMouseOut={MouseOutHandler}>Popis umiejętności niemieckich inżynierów, ustanowił standard dla współczenej klasy średniej (D)</p>
    <p className='opis'onMouseOver={MouseOverHandler} onMouseOut={MouseOutHandler}>Symbol amerykańskiej myśli technicznej, duży silnik w układzie v8, napęd na tył, relatywnie niska cena</p>
    </div>
    </div>
  );
};
export default Legendy;
