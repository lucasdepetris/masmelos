import { PRODUCTS_GETALL_FAILURE, SET_PRODUCTS, SET_SEARCH_RESULT, REMOVE_SEARCH_RESULT, REMOVE_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  products: [],
  error: null,
  searchResult: [],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        error: null,
      };
    case PRODUCTS_GETALL_FAILURE:
      return {
        ...state,
        products: [],
        error: action.error
      };
      case REMOVE_PRODUCTS:
        return {
          ...state,
          products:[],
        }
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.result,
      };
      case REMOVE_SEARCH_RESULT:
        return{
          ...state,
          searchResult: [],
        }
    default:
      return state
  }
}