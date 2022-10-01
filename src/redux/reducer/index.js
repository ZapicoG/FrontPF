
const initialState = {
    products: [],
    categories: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            }
        case "CREATE_PRODUCTS":
            return{
                ...state,
                products: action.payload
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