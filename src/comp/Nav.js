import React from "react";
import "./Nav.css";
import { BrowserRouter as Router } from "react-router-dom";

export const Nav = () => {

  const ContextMenu = (event) => {
    alert("proszę o 3, nie miałem już pomysłów");
    event.preventDefault();
  };
  return (
    <Router>
    <nav onContextMenu={ContextMenu}class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><i className="fas fa-car"></i>&nbsp; SAMOCHODY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/legendy">Legendy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/top5">Top 5</a>
        </li>
        <li class="nav-item">
          <p className='dare'>spróbuj kliknąć prawym przyciskiem na pasku nawigacji i zobacz co się stanie !</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Router>
  );
};

export default Nav