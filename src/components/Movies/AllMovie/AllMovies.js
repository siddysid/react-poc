import React, { useEffect , useState, useContext} from "react"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, Grid } from '@material-ui/core';
import fetchMovies from "../../../actions/fetchMovies";
import DisplayItems from "../DisplayItems/DisplayItems"
import { MovieContext } from '../MovieContext/MovieContext';


const AllMovies = ({onChildClick}) => {
  const [movieId, setMovieId] = useContext(MovieContext);
  const movieDetail = useContext(MovieContext);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMovies());

  }, []);

	return (
	   <div>
	   <Grid container>
		{products.products.map(product => (
			<DisplayItems product = {product} movieid={setMovieId} movieDetail = {movieDetail}/>

		))}
		</Grid>
	   </div>


	);

}

export default AllMovies;
