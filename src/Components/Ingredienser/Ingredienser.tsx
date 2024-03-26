import { useContext } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import pizzaDB from "../../../assets/pizza.json";
import extra from "../../../assets/extra.json";

import "./Ingredienser.scss";

const Ingredienser = () => {
  const { state } = useContext(PizzaContext);

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
                      <input checked type="checkbox" id={i} name={i} />
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
                      <input type="checkbox" id={x} name={x} />
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
                    <input type="checkbox" id={x} name={x} />
                    <label>{x}</label>
                  </div>
                </div>
              );
            })}
          </fieldset>
        </fieldset>
        <div className="containerBuy">
          <div className="select-btn" >$Buy</div>
        </div>
      </div>


    </>
  );
};

export default Ingredienser;
