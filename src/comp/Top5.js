import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './Top5.css'
import audi from '../res/img8.jpg'
import chevrolet from '../res/img6.jpg'
import ford from '../res/img5.jpg'
import toyota from '../res/img7.jpg'
import bmw from '../res/img3.jpg'

export const Top5 = () => { 
  const MouseEnter = (event) => {
    event.target.style.transform = "scale(1.15)";
  }
  const MouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
  }
    return (
      <div className='top5-container'>
        <Accordion defaultActiveKey="4">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h2>Miejsce pierwsze</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><p>BMW E23</p>
          <img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} src={bmw} /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <h2>Miejsce drugie</h2> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>Toyota Century</p>
          <img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}  src={toyota} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
     <h2>Miejsce trzecie</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <p>Ford Capri</p>
          <img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}  src={ford} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
     <h2>Miejsce czwarte</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
          <p>Chevrolet Impala</p>
          <img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}  src={chevrolet} />
          </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      <h2>Miejsce piąte</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
          <p>Audi 100</p>
          <img onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}  src={audi} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
    )
}

export default Top5; 