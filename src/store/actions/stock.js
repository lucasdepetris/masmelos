import { SET_PRODUCTS, SET_SEARCH_RESULT } from './actionTypes';
// import { getToken } from './auth';
import { uiStartLoading, uiStopLoading } from './ui';
import { getAllProducts, searchProducts } from '../../services/product';

export const getAll = () => {
  return (dispatch, getState) => {
    dispatch(uiStartLoading());
    return getAllProducts(getState().auth.token)
      .then(response => {
        dispatch(uiStopLoading());
        const products = [];
        for (let key in response) {
          products.push({
            ...response[key],
            key: key
          });
        }
        dispatch({
          type: SET_PRODUCTS,
          products: products
        });
      })
      .catch(err => {
        dispatch(uiStopLoading());
        alert("Something went wrong, sorry :/");
        console.log(err);
      });
  };
}


export const search = (text, response) => {
  return dispatch => {
    dispatch(uiStartLoading());
    const list = response.filter(item => item.title.toUpperCase().includes(text.toUpperCase()));
    const result = [];
    for (let key in list) {
      result.push({
        ...list[key],
        key: key
      });
      dispatch(uiStopLoading());
    }
    dispatch({
      type: SET_SEARCH_RESULT,
      result: result
    });

  };
}