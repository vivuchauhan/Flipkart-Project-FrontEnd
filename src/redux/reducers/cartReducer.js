
import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log("state in reducer is", state, action)
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);

            if (exist) {
                return {...state, cartItems: state.cartItems.map( data => data.product === exist.product ? item : data)}
            } else {
                return { ...state, cartItems: [...state.cartItems, item ]}
            }
            
        case actionType.REMOVE_FROM_CART:  
            return {...state, cartItems: state.cartItems.filter(product => product.id !== action.payload )}  

        case actionType.INC_DEC_QTY:
            return{...state, cartItems:
                // state.cartItems.map((product) => product.id === action.payload.id?(product.quantity=action.payload.quantity):product.quantity),
                 state.cartItems.map((product)=>{

                    if(product.id===action.payload){
                        product.quantity= action.quantity
                    }
                    return product;
                 })

            }

        default:
            return state;    
    }
}



