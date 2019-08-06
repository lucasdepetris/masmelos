import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN, REMOVE_CART_PRODUCTS, REMOVE_PRODUCTS, REMOVE_SEARCH_RESULT } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";
import { authService } from "../../services/auth";

export const Login = (authData) => {
  return dispatch => {
    dispatch(uiStartLoading());
    authService.signIn(authData)
      .then(parsedRes => {
        dispatch(uiStopLoading());
        if (!parsedRes.token) {
          alert(parsedRes.message);
        } else {
          dispatch(
            authStoreToken(
              parsedRes.token,
              parsedRes.expiresIn,
              {
                id: parsedRes.id,
                email: parsedRes.email,
                username: parsedRes.username,
              }
            )
          );
        }
      })
      .catch(err => {
        alert("que paso?", err);
        dispatch(uiStopLoading());
      });
  };
};

export const authStoreToken = (token, expiresIn, user) => {
  return dispatch => {
    const now = new Date();
    const expiryDate = now.getTime() + expiresIn * 1000;
    dispatch({
      type: AUTH_SET_TOKEN,
      token: token,
      expiryDate: expiryDate,
      user: user,
    });
  };
};

// export const getToken = () => {
//   return (dispatch, getState) => {
//     const promise = new Promise((resolve, reject) => {
//       const token = getState().auth.token;
//       const expiryDate = getState().auth.expiryDate;
//       const user = getState().auth.user;
//       // sin token o vencido
//       if (!token || new Date(expiryDate) <= new Date() || !user) {
//         reject();
//       } else {
//         resolve(token);
//       }
//     });
//     return promise
//       .catch(err => {
//         console.log("No encontro el token", err)
//         dispatch(authLogout());
//       })
//       .then(token => {
//         return token;
//       });
//   };
// };

export const authLogout = () => {
  return dispatch => {
    dispatch({ type: AUTH_REMOVE_TOKEN })
    dispatch({ type: REMOVE_CART_PRODUCTS })
    dispatch({ type: REMOVE_PRODUCTS })
    dispatch({ type: REMOVE_SEARCH_RESULT })
  };
};