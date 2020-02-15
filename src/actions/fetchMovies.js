import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './action';

function fetchMovies() {
    return dispatch => {
        
        const apikey = "647ba5ace1aeb9635cfcb906a0cb327a";
        const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
        fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            
           
            dispatch(fetchProductsSuccess(res.results));
            return res.products;
        })
      
    }
}

export default fetchMovies;
