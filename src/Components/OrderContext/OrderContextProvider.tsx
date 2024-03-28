import { createContext, useReducer } from "react"; // importing createContext and useReducer from react


// Structure of a pizza 
type Order = {
    id: number,
    name: string,
    price: number,
    antal: number,
    extra: string[]
};


// GlobalState type for the pizza context
type OrderState = {
    pizzas: Order[]; // array of pizza orders
};

const initialPizzaState: OrderState = {
    pizzas: [], // initializing the state with an empty array
};


export const OrderContext = createContext<{ state: OrderState; dispatch: React.Dispatch<Action>; }>({
    state: initialPizzaState,
    dispatch: () => null,
});


// Action type for the pizza context
type Action = { type: "ADD"; payload: Order }
    | { type: "REMOVE"; payload: string } | { type: "EDIT"; payload: string };


// Reducer function to handle the state changes based on actions
const reducer = (state: OrderState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                pizzas: [...state.pizzas, action.payload], // adding the new pizza to the state
            };
        case "REMOVE":
            return state;  // detta ska ändras! Remove fungerar inte
        default:
            return state;
    }
};
type OrderContextProviderProp = {
    children: React.ReactNode;
};

function OrderContextProvider({ children }: OrderContextProviderProp) {
    // här kan vi använda useReducer eller useState


    const [state, dispatch] = useReducer(reducer, initialPizzaState);


    // rendering the context provider with its value as the state and the dispatch function
    return (
        <OrderContext.Provider value={{ state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
}


export default OrderContextProvider;