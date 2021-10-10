import { IActions, ADD_ORDER, DELETE_ORDER, CHECKOUT } from "./home-actions";
import { Order } from "../models/pizza.model";

export interface IHomeState {
    orderList: Order[];
};

const homeReducer = (state: IHomeState, action: IActions) => {
    switch(action.type) {
        case ADD_ORDER:
            return {
                ...state,
                orderList: [...state.orderList, action.payload]
            }
        case DELETE_ORDER:
            return {
                ...state,
                orderList: state.orderList.filter(order => order.orderId !== action.payload)
            }
        case CHECKOUT:
            return {...state}
        default:
            return state;    

    }
}

export default homeReducer;