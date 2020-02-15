import React, {useState, useEffect, createContext} from "react";
import axios from 'axios';
import productData from "../../../data";


export const ProductContext = createContext();

export const ProductProvider = props => {
 /*  const [productData, setProductData] = useState([]);
    const url = "http://localhost:8888/drupal-8/card_list";

    useEffect(
      () => {
        // Start it off by assuming the component is still mounted
        let mounted = true;

        const loadData = async () => {
          const response = await axios.get(url);

          // We have a response, but let's first check if component is still mounted
          if (mounted) {
              setProductData(response.data);
          }
        };
        loadData();

        return () => {
          // When cleanup is called, toggle the mounted variable to false
          mounted = false;
        };
      },[url]
      );*/


    return (
      <>
        <ProductContext.Provider value={productData}>
          {props.children}
        </ProductContext.Provider>
      </>
    );
};
