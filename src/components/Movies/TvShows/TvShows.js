import React, { useEffect , useState, useContext } from "react"

import { Container, Grid } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchShows from "../../../actions/fetchShows";
import DisplayItems from "../DisplayItems/DisplayItems"
import { MovieContext }  from '../MovieContext/MovieContext';

const TvShows = () => {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [movieId, setMovieId,movieDetail] = useContext(MovieContext);
  const movieDetails = useContext(MovieContext);
console.log(movieDetails);
  useEffect(() => {
    dispatch(fetchShows());

  }, []);



	return (
	   <div>
	   <Grid container>
		{products.products.map(product => (
			<DisplayItems product = {product} movieid = {setMovieId}  movieDetail = {movieDetails}/>

		))}
		</Grid>
	   </div>


	);

}

export default TvShows;
