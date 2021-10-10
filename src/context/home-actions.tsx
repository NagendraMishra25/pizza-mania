export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const CHECKOUT = 'CHECKOUT';

export interface IActions {
    readonly type: string;
    readonly payload?: any
}
