import "./App.css";
import React from 'react';
import Nav from './comp/Nav';
import Home from './comp/Home';
import Legendy from './comp/Legendy'
import Top5 from './comp/Top5'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./comp/Footer";

function App() {
  return (
    <Router>
      <header>
        <Nav></Nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/legendy" component={Legendy}/>
        <Route path="/top5" exact component={Top5}/>
      </Switch>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
