import { useContext } from "react";
import { OrderContext, Action } from "../OrderContext/OrderContextProvider";

const RemoveBtn = ({ pizzaId }: { pizzaId: number }) => {
  const { dispatch } = useContext(OrderContext);

  const handleRemovePizza = (pizzaId: number) => {
    dispatch({ type: "REMOVE", payload: pizzaId }); // Skicka pizzans ID direkt som payload
  };

  return (
    <button onClick={() => handleRemovePizza(pizzaId)}>-</button>
  );
};

export default RemoveBtn;
