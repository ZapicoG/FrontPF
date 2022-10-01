
import { DETAIL_PRODUCT, GET_PRODUCTS_NAME, MULTI_ACTION, SEARCH_PRODUCT } from "../action";

const initialState = {
    products: [],
    allProduct:[],
    detail: {},
    categories: [],
    brand: [],
    model: [],
    filter: {
        category: "",
        brand: "",
        model: "",
        search:"",
        minPrice: 0,
        maxPrice: 1000000000000000000,
        order: "ASC",
        amount: 10,
        page: 0
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case MULTI_ACTION:
            const results = action.payload.actions.map(a => store.dispatch(a))
            return results;
        case GET_PRODUCTS_NAME:
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
        case "FETCH_CATEGORIES":
            return{
                ...state,
                categories: action.payload
            }
        case "CLEAR_CATEGORIES":
            return{
                ...state,
                categories: action.payload
            }
        
        default: return state
    }
}



export default rootReducer;