//import  hooks and components from REACH & context providers

import { useContext, useState } from "react";
import { PizzaContext } from "../PizzaContext/PizzaContextProvider";
import pizzaDB from "../../../assets/pizza.json";
import extra from "../../../assets/extra.json";
import { OrderContext } from "../OrderContext/OrderContextProvider";

//importing scss file for style
import "./Ingredienser.scss";


const Ingredienser = () => {
  const { state } = useContext(PizzaContext); // getting the state from PizzaContext
  const [extraIngredients, setExtraIngredients] = useState<string[]>([]); // Iniitializing state for extra ingredients

  const selectedPizza = state.pizzas.length > 0 && pizzaDB[state?.pizzas[0]?.id];  // the first pizza from state if its available


  //function to handle checkbox change for extra ingredients
  const handleExtrasChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked; // getting checkbox state
    const ingredient = e.target.name; // getting ingredient name

    // updatinge the list of extra ingredients base on chechbox state
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
      payload: { id: state.pizzas[0].id, price: pizzaDB[state.pizzas[0].id].pris, antal: 1, name: pizzaDB[state.pizzas[0].id].namn, extra: extraIngredients },
    });

  }


// rendering the component
  return (
    <>
      <div id="ingredienserDiv" className="ingredienserDiv">
                {/* Section for selecting pizza ingredients */}
        <fieldset id="pizzaFieldset" className="pizzaFieldset">
          <legend className="main-legend">Ingredienser</legend>
          <div className="flex-container">
            {/* section for basic ingredients */}
            <fieldset className="ingredientsFieldset gridContainer2">
              <legend className="defult-legend">Basic ingredienser</legend>
              {/* looping the basic ingredients to checkbox inputs and labels*/}
              {state.pizzas.map((m) => {
                return pizzaDB[m.id].ingredienser.map((i) => {
                  return (
                    <div className="defult-ingredienser" key={i}>
                      <input defaultChecked type="checkbox" id={i} name={i} />
                      <label>{i}</label>
                    </div>
                  );
                });
              })}
            </fieldset>
            {/* section for Sås */}
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
        {/* button to add the pizza to card */}
        <div className="containerBuy">
          <div className="select-btn" onClick={clickHandle}>$Add To Card</div>
        </div>
      </div>


    </>
  );
};

export default Ingredienser;
