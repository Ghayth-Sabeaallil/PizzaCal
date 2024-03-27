import { createContext, useReducer } from "react";

type Pizza = {
    id: number;
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
    | { type: "ADD"; payload: Pizza }
    | { type: "REMOVE"; payload: string };

const reducer = (state: PizzaState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                pizzas: [action.payload],
            };
        case "REMOVE":
            return state;  // detta ska ändras! Remove fungerar inte
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