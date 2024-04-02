import { createContext, useReducer } from "react";

type Pizza = {
    pizzaId: number;
};


// GlobalState
type PizzaState = {
    pizzas: Pizza[];
};

const initialPizzaState: PizzaState = {
    pizzas: [],
};


export const PizzaContext = createContext<{ state: PizzaState; dispatch: React.Dispatch<Action>; }>({
    state: initialPizzaState,
    dispatch: () => null,
});

type Action =
    | { type: "SELECT"; payload: Pizza };

const reducer = (state: PizzaState, action: Action) => {
    switch (action.type) {
        case "SELECT":
            return {
                pizzas: [action.payload],
            };
        default:
            return state;
    }
};
type PizzaContextProviderProp = {
    children: React.ReactNode;
};

function PizzaContextProvider({ children }: PizzaContextProviderProp) {
    // här kan vi använda useReducer eller useState


    const [state, dispatch] = useReducer(reducer, initialPizzaState);


    return (
        <PizzaContext.Provider value={{ state, dispatch }}>
            {children}
        </PizzaContext.Provider>
    );
}


export default PizzaContextProvider;