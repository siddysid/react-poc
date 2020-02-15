import React, { useEffect , useState} from "react"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Grid } from '@material-ui/core';
import fetchMovies from "../../../actions/fetchMovies";
import DisplayItems from "../DisplayItems/DisplayItems"


const AllMovies = () => {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());

  }, []);


	 
	return (
	   <div>
	   <Grid container>
		{products.products.map(product => (
			<DisplayItems product = {product}/>
			
			
		))}
		</Grid>
	   </div>
		

	);

}

export default AllMovies;