import { SET_CART_PRODUCTS, REMOVE_CART_PRODUCTS, UPDATE_CART_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    products: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.products],
            }
        case UPDATE_CART_PRODUCTS:
            return {
                ...state,
                products: action.product,
            }
        case REMOVE_CART_PRODUCTS:
            return initialState;
        default:
            return state;
    }
}