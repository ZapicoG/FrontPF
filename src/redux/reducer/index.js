import { GET_PRODUCTS, DETAIL_PRODUCT, SEARCH_PRODUCT } from "../action";

const initialState = {
    products: [],
    allProduct:[],
    detail: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                allProduct: action.payload
            }
        case DETAIL_PRODUCT:
            return{
                ...state,
                detail: action.payload
            }
        case SEARCH_PRODUCT:
            return{
                ...state,
                products:action.payload
            }
        default: return state
    }
}



export default rootReducer;