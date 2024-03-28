import { useContext } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import extra from "../../../assets/extra.json";

const CalcPizza = () => {
  const { state } = useContext(PizzaContext);

  const totalPrice = () => {
    const baseCost = 120;
    const toppingCost = 10;

    let totalToppings = 0;
    state.pizzas.forEach((pizza) => {
      totalToppings += pizza.ingredienser.length;

      console.log(totalToppings);
    });

    let extraIngredientsCount = 0;
    state.pizzas.forEach((pizza) => {
      if (pizza.id !== 0) {
        extraIngredientsCount += extra[0].extraIngredienser.length;
      }
    });

    const totalPrice = baseCost + toppingCost * extraIngredientsCount;
    return totalPrice;
  };

  return (
    <div>
      <p>Total price: {totalPrice()} kr</p>
    </div>
  );
};

export default CalcPizza;