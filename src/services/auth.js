import config from "../constants/config";

export const authService = {
  signIn,
  signUp
};

function signIn(authData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        Email: authData.email,
        Password: authData.password
      })
  };
  let url = `${config.apiURL}/users/authenticate`;
  return fetch(url, requestOptions)
    .catch(err => {
      alert("No se pudo iniciar sesion, intente de nuevo en unos minutos.");
    })
    .then(res => res.json())
    .catch(err => {
      alert(err);
    });
}

function signUp(authData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        Username: authData.email,
        Password: authData.password
      })
  };
  return fetch(`${config.apiURL}/users/authenticate`, requestOptions)
    .catch(err => {
      alert("No se pudo iniciar sesion, intente de nuevo en unos minutos.");
    })
    .then(res => res.json())
    .then(parsedRes => {
      if (!parsedRes.token) {
        alert("No se pudo iniciar sesion, intente de nuevo en unos minutos.");
      } else {
        dispatch(
          authStoreToken(
            parsedRes.token,
            parsedRes.expiresIn,
            // parsedRes.refreshToken
          )
        );
        //solo para native
        startMainTabs();
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
}