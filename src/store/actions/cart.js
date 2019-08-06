import { SET_CART_PRODUCTS, UPDATE_CART_PRODUCTS } from "./actionTypes";

export const setProduct = (products) => {
    return dispatch => {
        dispatch({
            type: SET_CART_PRODUCTS,
            products: products,
        })
    }
}
export const updateProducts = (product) => {
    return dispatch => {
        dispatch({
            type: UPDATE_CART_PRODUCTS,
            product: product
        })
    }
}