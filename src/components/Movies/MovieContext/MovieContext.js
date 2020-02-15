import React, {useState, useEffect, createContext} from "react";
import axios from 'axios';
import DisplayItems from "../DisplayItems/DisplayItems";
//import productData from "../../../data";


export const MovieContext = createContext();

const  MovieProvider = props => {
    const [movieDetail, setMovieDetail] = useState([]);
    const [movieId, setMovieId] = useState(0);

    const apikey = "647ba5ace1aeb9635cfcb906a0cb327a";
    const apiUrl = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${apikey}`;

    useEffect(
      () => {
        // Start it off by assuming the component is still mounted
        let mounted = true;

        const loadData = async () => {
          const response = await axios.get(apiUrl);

          // We have a response, but let's first check if component is still mounted
          if (mounted) {
            setMovieDetail(response.data);
          }
        };
        loadData();
        return () => {
          // When cleanup is called, toggle the mounted variable to false
          mounted = false;
        };
      },[apiUrl]
      );

    return (
      <>
        <MovieContext.Provider value={[movieId, setMovieId, movieDetail]}>
          {props.children}
        </MovieContext.Provider>
      </>
    );
};

export default MovieProvider;
