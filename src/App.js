import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import ProductList from "./components/ProductList/ProductList";
import ProductDescription from "./components/ProductList/components/ProductDescription/ProductDescription";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {


  return (

    <Container>

      <Router>
        <Header />
        <Switch>
              <Route path="/productlist">
                <ProductList />
              </Route>
              <Route path="/product-description">
               <ProductDescription />
              </Route>
               <Route path="/movies">
               <Movies />
              </Route>
        </Switch>
      </Router>
    </Container>


  );
}

export default App;
