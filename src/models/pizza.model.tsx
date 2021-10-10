export interface Pizza {
    id: number;
    name: string;
    price: number;
    currency: string;
}

export interface Order extends Pizza {
    orderId: string;
    toppings: Topping[];
    size: string;
    quantity: number;
}

export interface Topping {
    name: string
}

export const ToppingList: Topping[] = [
 {name: 'Pizza Topping #1'},
 {name: 'Pizza Topping #2'},
 {name: 'Pizza Topping #3'},
 {name: 'Pizza Topping #4'},
 {name: 'Pizza Topping #5'},
 {name: 'Pizza Topping #6'},
 {name: 'Pizza Topping #7'},
 {name: 'Pizza Topping #8'},
 {name: 'Pizza Topping #9'},
];

export const PizzaSizes: string[] = ['small', 'medium', 'large'];