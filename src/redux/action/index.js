import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";


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
