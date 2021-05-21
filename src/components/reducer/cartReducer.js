import {Products, Location, Cart} from '../../data';


const initState = {
    Products,
    Location,
    Cart
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            if(state.Cart.length > 0){
                for(let i = 0; i < state.Cart.length; i++){
                    if(state.Cart[i].id === action.payload.id){
                        const itemList = state.Cart.map(item => {
                        if(item.id === action.payload.id){
                            item.quantity += 1
                            item.totalPrice += Number(item.price)
                        }
                            return item;  
                        })
                    return{
                        ...state,
                        Cart: itemList
                    };
                }}
            }
            return{
                ...state,
                Cart: [...state.Cart, action.payload]
            };

        case "REMOVE_FROM_CART":
            const filteredItem = state.Cart.filter(item => item.id !== action.payload)
            return{
                ...state,
                Cart: filteredItem
            };

        case "INCREASE_QUANTITY":
            const increaseItem = state.Cart.map((item) => {
                if(item.id === action.payload){
                    item.quantity += 1;
                    item.totalPrice += Number(item.price)
                }
                return item;
            })
            return{
                ...state,
                Cart: increaseItem
            };

        case "DECREASE_QUANTITY":
                const decreaseItem = state.Cart.map((item) => {
                    if(item.id === action.payload){
                        item.quantity -= 1; 
                        item.totalPrice -= Number(item.price)
                    }
                    return item;
                })
                return{
                    ...state,
                    Cart: decreaseItem
                };

        case "Cart_Empty":
            return{
                ...state,
                Cart: []
            }

        default:
            return state;
    }

}

export default cartReducer;
