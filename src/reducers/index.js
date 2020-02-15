import counterReducer from './counter';
import productsReducer from './productsReducer';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	products: productsReducer
})

export default allReducers;
