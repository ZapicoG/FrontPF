
import { CLEAR_CATEGORIES, DETAIL_PRODUCT, FETCH_CATEGORIES, GET_PRODUCTS_FILTERED, GET_PRODUCTS_NAME, MULTI_ACTION, RESET_FILTER, SEARCH_PRODUCT, UPDATE_FILTER } from "../action";

const initialState = {
    products: [],
    allProductsName:[],
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

        // case MULTI_ACTION:
        //     const results = action.payload.actions.map(a => {
        //         return async (dispatch) => {
        //             dispatch(a)
        //         }
        //     })
        //     return results;

//Filter
        case RESET_FILTER:
            return {
                ...state,
                filter: initialState.filter
            };
        case UPDATE_FILTER:
            return {
                ...state,
                filter: {...state.filter, ...action.payload}
            }
        
//Products
        case GET_PRODUCTS_FILTERED:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_NAME:
            return{
                ...state,
                allProductsName: action.payload
            }
        case DETAIL_PRODUCT:
            return{
                ...state,
                detail: action.payload
            }

        case SEARCH_PRODUCT:
            return{
                ...state,
                products: action.payload
            }

//Categories            
        case FETCH_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case CLEAR_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        
        default: return state
    }
}



export default rootReducer;