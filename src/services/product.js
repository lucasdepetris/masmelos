import config from "../constants/config";

export const getAllProducts = token => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    };

    return fetch(`${config.apiURL}/products`, requestOptions)
        .then(response => response.json())
        .then(res => {
            return res
        });
}

export const searchProducts = (token, text) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return fetch(`${config.apiURL}/products/search?text=${text}`, requestOptions)
        .then(response => response.json())
        .then(res => {
            return res
        });
}