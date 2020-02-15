import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import ProductList from "./components/ProductList/ProductList";
import ProductDescription from "./components/ProductList/components/ProductDescription/ProductDescription";
import Tickets from "./components/Tickets/Tickets";
import MyEnhancedForm from "./components/Forms/Forms";
import Typography from "@material-ui/core/Typography";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { useSelector } from 'react-redux';


  // Store

  // Action

  // Redducer
function App() {

  const counter = useSelector(state => state.counter);
  return (

    <Container>

      <Router>
        <Header />
        <Switch>
              <Route path="/productlist">
                <ProductList />
              </Route>
                <Route path="/tickets">
                <Tickets />
              </Route>
               <Route path="/forms">
                <MyEnhancedForm />
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
