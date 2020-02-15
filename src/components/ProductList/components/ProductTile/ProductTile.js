import React, {Component,useContext, useState, Suspense, lazy } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { ProductContext } from '../../ProductContext/ProductContext';
import SearchComponent from "../SearchComponent/SearchComponent";
import SpeechRecognition from "../../../speechRecog/speechRecognition"


const Product = React.lazy(() => import('../Product/Product'));
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  content: {
    marginTop: "100px",
    padding:"50px",
    textAlign:"center"
  },

  media: {
    height: 140,
  },
}));
 const ProductTile = () => {
    const classes = useStyles();

    const productData = useContext(ProductContext);

    const [data, setData] = useState('');
     const [word, setWord] = useState('');

    const updateValue = event => {
      
      setData(event.target.value);
    };

  const lowercasedFilter = data.toLowerCase();
  const datassss = productData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
    });

  const updateWord = (word) => {
    setData(word);
  }


    return (

      <>
      <SpeechRecognition  findWordFromSpeech = {updateWord}/>
        <Grid item sm={6}>
          <SearchComponent handleChange={updateValue} data={data} />
        </Grid>
        <Grid container item spacing={2}>
          {datassss.map((product, index) => (
            <Grid
              item
              sm={4}
              xs={12}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Product product={product} classes={classes} key={product.nid} />
              </Suspense>

            </Grid>
                  ))}
        </Grid>
      </>
    );
};

export default ProductTile;
