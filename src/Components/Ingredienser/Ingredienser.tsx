import { useContext, useState } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import pizzaDB from "../../../assets/pizza.json";
import extra from "../../../assets/extra.json";

import "./Ingredienser.scss";
import { OrderContext } from "../OrderContext/OrderContextProvider";


const Ingredienser = () => {
  const { state } = useContext(PizzaContext);
  const [extraIngredients, setExtraIngredients] = useState<string[]>([]); // Iniitializing state for extra ingredients

  const selectedPizza = state.pizzas.length > 0 && pizzaDB[state?.pizzas[0]?.id];  // the first pizza from state if its available

  const handleExtrasChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked; // getting checkbox state
    const ingredient = e.target.name;

    // updatinge exta ingredients state from checkbox
    if (isChecked) {
      setExtraIngredients((prev) => [...prev, ingredient]);
    } else {
      setExtraIngredients((prev) => prev.filter((item) => item !== ingredient));
    }
  };

  const { dispatch } = useContext(OrderContext);


  const clickHandle: React.FormEventHandler<HTMLDivElement> = () => {
    const priceFieldset = document.getElementById('priceFieldset');
    if (priceFieldset) {
      priceFieldset.style.display = 'flex';
    }
    dispatch({
      type: "ADD",
      payload: { id: state.pizzas[0].id, price: pizzaDB[state.pizzas[0].id].pris, antal: 1, name: pizzaDB[state.pizzas[0].id].namn, extra: extraIngredients },
    });

  }



  return (
    <>
      <div id="ingredienserDiv" className="ingredienserDiv">
        <fieldset id="pizzaFieldset" className="pizzaFieldset">
          <legend className="main-legend">Ingredienser</legend>
          <div className="flex-container">
            <fieldset className="ingredientsFieldset gridContainer2">
              <legend className="defult-legend">Basic ingredienser</legend>
              {state.pizzas.map((m) => {
                return pizzaDB[m.id].ingredienser.map((i) => {
                  return (
                    <div className="defult-ingredienser" key={i}>
                      <input
                        defaultChecked
                        type="checkbox"
                        id={i}
                        name={i}
                        onChange={handleExtrasChange}
                      />
                      <label>{i}</label>
                    </div>
                  );
                });
              })}
            </fieldset>
            <fieldset className="ingredientsFieldset">
              <legend className="extra-legend">Sås 5kr/st</legend>
              {extra[0].sås.map((x) => {
                return (
                  <div className="defult-ingredienser" key={x}>
                    <div>
                      <input onChange={handleExtrasChange} type="checkbox" id={x} name={x} />
                      <label>{x}</label>
                    </div>
                  </div>
                );
              })}
            </fieldset>
          </div>

          <fieldset className="ingredientsFieldset gridContainer3">
            <legend className="extra-legend">Extra ingredienser 5kr/st</legend>
            {extra[0].extraIngredienser.map((x) => {
              return (
                <div className="defult-ingredienser " key={x}>
                  <div>
                    <input onChange={handleExtrasChange} type="checkbox" id={x} name={x} />
                    <label>{x}</label>
                  </div>
                </div>
              );
            })}
          </fieldset>
        </fieldset>
        <div className="containerBuy">
          <div className="select-btn" onClick={clickHandle}>$Add To Card</div>
        </div>
      </div>


    </>
  );
};

export default Ingredienser;
