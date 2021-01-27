import React, {Component} from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Route } from "react-router-dom";
import Legendy from './Legendy'


class Home extends Component{ 

constructor(){
  super()
  this.state={show:false}
}

render(){
  const LoadedDataHandler = (event) => {
    alert("Poprawnie załadowano filmik");
    event.preventDefault();
  };
  const ClickHandler = () => {
    <Route path="/legendy" component={Legendy}/>
    
  }
  const DoubleClickHandler = () => {
    this.setState({show:!this.state.show})
  }
    return(
      <div className='home-container'>
        
        <Button onClick={ClickHandler}  href='/legendy' id='next' className='btn' variant='light' size='lg'>Kliknij aby przejść dalej</Button>
        <Button onDoubleClick={DoubleClickHandler} id='slogan' className='btn' variant='light' size='lg'>Kliknij dwa razy aby odkryć piękno motoryzacji</Button>
        { this.state.show?
          <p className='piekno'> Auta to nie tylko środek transportu <br/>Zobacz ten filmik i przekonaj sie sam</p> : null}
        <iframe 
        onLoad={LoadedDataHandler}  width="980" height="580" src="https://www.youtube.com/embed/VFjBJfBsTRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
}
}
export default Home;