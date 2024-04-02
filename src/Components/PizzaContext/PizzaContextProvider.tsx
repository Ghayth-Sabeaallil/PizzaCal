//import
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

//createContext
export const PizzaContext = createContext<{ state: PizzaState; dispatch: React.Dispatch<Action>; }>({
    state: initialPizzaState,
    dispatch: () => null,
});

//action to select pizza (when we send data from pizza Img to Ingredianser)
type Action =
    | { type: "SELECT"; payload: Pizza };

//reducer (dispatch) to save Pizza Id, so we can use it on IngredienserDiv
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
    const [state, dispatch] = useReducer(reducer, initialPizzaState);
    return (
        <PizzaContext.Provider value={{ state, dispatch }}>
            {children}
        </PizzaContext.Provider>
    );
}
export default PizzaContextProvider;