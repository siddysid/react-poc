import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/action';

const initialState = {
    pending: 'aa',
    products: [],
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: action.status
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
             
                pending: false,
                products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;

export default productsReducer;
