import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

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
