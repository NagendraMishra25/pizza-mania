import React, {useReducer} from 'react'
import { Order } from "../models/pizza.model";
import { ADD_ORDER, CHECKOUT, DELETE_ORDER } from './home-actions';
import HomeContext from './home-context'
import homeReducer from './home-reducer'

const HomeState = (props: any) => {

    const initialState = {
        orderList: []
    };
    
    const [state, dispatch] = useReducer(homeReducer, initialState);

    // add order action
    const addOrder = (order: Order) => {
        dispatch({
            type: ADD_ORDER,
            payload: order
        });
    };

    // delete order action
    const deleteOrder = (orderId: number) => {
        dispatch({
            type: DELETE_ORDER,
            payload: orderId
        });
    };

    // checkout order action
    const checkout = (orderList: Order[]) => {
        dispatch({
            type: CHECKOUT,
            payload: orderList
        });
    };

    return (
        <HomeContext.Provider 
            value={{
                orderList: state.orderList,
                addOrder,
                deleteOrder,
                checkout
            }}>
            {props.children}
        </HomeContext.Provider>
    )
} 

export default HomeState;