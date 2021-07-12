import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lista from './componentes/Lista';
import {Route,BrowserRouter,Switch,Redirect}from 'react-router-dom';

     const route=(
       <BrowserRouter>
        <Switch>
          <Route exact path="/"component={Lista}/>
        </Switch>
       </BrowserRouter>
     )


ReactDOM.render( route,
  document.getElementById('root')
);
