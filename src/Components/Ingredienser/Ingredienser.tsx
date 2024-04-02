//import
import { useContext, useState } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import pizzaDB from "../../../assets/pizza.json";
import extra from "../../../assets/extra.json";
import { v4 as uuidv4 } from 'uuid';
import { OrderContext } from "../OrderContext/OrderContextProvider";

//Scss
import "./Ingredienser.scss";


const Ingredienser = () => {
  const { state } = useContext(PizzaContext); // getting the state from PizzaContext
  const [extraIngredients, setExtraIngredients] = useState<string[]>([]); // Iniitializing state for extra ingredients

  //function to handle checkbox change for extra ingredients
  const handleExtrasChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked; // getting checkbox state
    const ingredient = e.target.name; // getting ingredient name


    // updatinge exta ingredients state from checkbox
    if (isChecked) {
      setExtraIngredients((prev) => [...prev, ingredient]);
    } else {
      setExtraIngredients((prev) => prev.filter((item) => item !== ingredient));
    }
  };

  const { dispatch } = useContext(OrderContext);

  // Function to handle when the user clicks on the "Beställ" button
  const clickHandle: React.FormEventHandler<HTMLDivElement> = () => {
    const priceFieldset = document.getElementById('priceFieldset'); // finding the price section
    if (priceFieldset) {
      priceFieldset.style.display = 'flex'; //display the price section
    }
    //adding the selected pizza with its details to the order
    dispatch({
      type: "ADD",
      payload: { id: state.pizzas[0].pizzaId, uuid: uuidv4(), price: pizzaDB[state.pizzas[0].pizzaId].pris, antal: 1, name: pizzaDB[state.pizzas[0].pizzaId].namn, extra: extraIngredients },
    });
    extraIngredients.map((e) => {

      //uncheck all boxes when we add the order
      let input = document.getElementById(`${e}-extra`) as HTMLInputElement;
      input.checked = false;

    })
    //empty array when all add to order
    setExtraIngredients([]);
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
                return pizzaDB[m.pizzaId].ingredienser.map((i) => {
                  return (
                    <div className="defult-ingredienser" key={i}>
                      <input defaultChecked type="checkbox" id={i} name={i} />
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
                    <div className="extra">
                      <input onChange={handleExtrasChange} type="checkbox" id={`${x}-extra`} name={x} />
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
                  <div className="extra">
                    <input onChange={handleExtrasChange} type="checkbox" id={`${x}-extra`} name={x} />
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
