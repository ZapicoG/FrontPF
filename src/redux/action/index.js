import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const CLEAR_CATEGORIES = "CLEAR_CATEGORIES";



export const getProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        "https://backpf-production.up.railway.app/product/all"
      );
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


export const seachProduct = (name) => {
    return async (dispatch) => {
      try {
        const products = await axios.get(
          `https://backpf-production.up.railway.app/product/filterBy?search=${name}`
        );
        dispatch({
          type: SEARCH_PRODUCT,
          payload: products.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
 
export const detailProduct = (id) => {
    return async (dispatch) => {
      try {
        const products = await axios.get(
          `https://backpf-production.up.railway.app/product/ID/${id}`
        );
        dispatch({
          type: DETAIL_PRODUCT,
          payload: products.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
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

