//import
import { createContext, useReducer } from "react";

//type of Order
type Order = {
    id: number,
    uuid: string,
    name: string,
    price: number,
    antal: number,
    extra: string[]
};


// GlobalState
type OrderState = {
    pizzas: Order[];
};

const initialPizzaState: OrderState = {
    pizzas: [],
};

//createContext
export const OrderContext = createContext<{ state: OrderState; dispatch: React.Dispatch<Action>; }>({
    state: initialPizzaState,
    dispatch: () => null,
});

//3 actions (To add order, To remove order and to edit antal)
type Action = { type: "ADD"; payload: Order }
    | { type: "REMOVE"; payload: string } |
{ type: "EDIT"; payload: string; antal: number };

//dispatch 
const reducer = (state: OrderState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                pizzas: [...state.pizzas, action.payload],
            };
        case "REMOVE":
            return {
                ...state.pizzas,
                pizzas: state.pizzas.filter((l) => l.uuid !== action.payload),
            };
        case "EDIT":
            return {
                ...state.pizzas,
                pizzas: state.pizzas.map(p => {
                    if (p.uuid == action.payload) {
                        return { ...p, antal: action.antal };
                    } else {
                        return p;
                    }
                }),
            };
        default:
            return state;
    }
};
type OrderContextProviderProp = {
    children: React.ReactNode;
};

function OrderContextProvider({ children }: OrderContextProviderProp) {
    const [state, dispatch] = useReducer(reducer, initialPizzaState);
    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
}
export default OrderContextProvider;