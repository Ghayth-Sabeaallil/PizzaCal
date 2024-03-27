//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"

//

//data
import pizzaDB from "../assets/pizza.json"
import PizzaContextProvider from "./Components/PizzaContext/PizzaContextProvider"
import Ingredienser from "./Components/Ingredienser/Ingredienser"

function App() {

  return (
    <>
      <PizzaContextProvider>
        <PizzaImgDiv pizzaDB={pizzaDB} />
        <Ingredienser />
      </PizzaContextProvider>

    </>
  )
}

export default App