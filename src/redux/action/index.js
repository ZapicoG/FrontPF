import axios from 'axios';
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const CLEAR_CATEGORIES = "CLEAR_CATEGORIES";


export const getProducts = () => {
    return async (dispatch) => {
        const products = await axios.get('http://localhost:3001/products');
        dispatch({
            type: "GET_PRODUCTS",
            payload: products.data
        });
    }
};

export const createProducts = (payload) => {
    return async () => {
        const products = await axios.post('http://localhost:3001/products', payload);
        return products;
    }
}

export function getCategories () {
    return async function (dispatch) {
        fetch("https://backpf-production.up.railway.app/category")
        .then(response => response.json())
        .then((categories) => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: categories,
            }) 
        })
    }
};

export function clearCategories() {
    return {
        type: CLEAR_CATEGORIES,
        payload: []
    }
};

