import React, { Component } from "react";
import Api from './services/Api';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { render } from "@testing-library/react";


function App(){
  return(
    <Router>
        <Routes/>
    </Router>
  );
};
export default App;

class Teste extends Element{
  render(){
    return(
      <div>
<h1> Login</h1>
      </div>
    )
  }
}

