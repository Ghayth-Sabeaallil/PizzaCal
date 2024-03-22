//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"

//data
import pizzaDB from "../assets/pizza.json"

function App() {

  return (
    <>

      <PizzaImgDiv pizzaDB={pizzaDB} />

    </>
  )
}

export default App