export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

const fetchProductsPending = (status)  => {
    return {
        type: FETCH_PRODUCTS_PENDING,
        status: status
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}

export  {
    fetchProductsError,
    fetchProductsSuccess,
    fetchProductsPending

}