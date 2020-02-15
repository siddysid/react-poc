
import React, {Component, useState} from "react";
import { Container, Grid } from '@material-ui/core';
import { ProductProvider } from './ProductContext/ProductContext';
import ProductTile from "./components/ProductTile/ProductTile";
import ProductDescription from "./components/ProductDescription/ProductDescription";




const ProductList = function() {
  return (
    <>

      <Grid container alignItems='center' justify='center' direction="column">
        <Grid item sm={6}>
          <ProductDescription />
        </Grid>
        <ProductProvider>
          <Grid container item justify="center" alignItems="center">
            <ProductTile />
          </Grid>
        </ProductProvider>
      </Grid>
    </>


  );

};

export default ProductList;
