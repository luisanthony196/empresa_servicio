import React from 'react';
import './Assets/css/App.css';
import Home from './Pages/Home'
import Atencion from './Pages/Atencion'
import Login from './Pages/Login'

import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter  basename="">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Reclamos" component={Home}></Route>
        <Route exact path="/Atencion" component={Atencion}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
