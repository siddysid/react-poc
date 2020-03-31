import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './components/ProductList/ProductList';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index'
import { Provider } from 'react-redux'


// STORE

// ACTION - DESCRIBING AN ACTION in action folder


//REDUCER - reducer folder



let store = createStore(allReducers,applyMiddleware(thunk));

// Display in console.log
store.subscribe(() => console.log(store.state));

// DISPATCH 


ReactDOM.render(

	<Provider store = {store} >
	  <App />
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
