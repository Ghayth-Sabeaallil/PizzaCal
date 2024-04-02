//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"
import Ingredienser from "./Components/Ingredienser/Ingredienser"
import PriceDiv from "./Components/PriceDiv/PriceDiv"

//data
import pizzaDB from "../assets/pizza.json"
import PizzaContextProvider from "./Components/PizzaContext/PizzaContextProvider"
import OrderContextProvider from "./Components/OrderContext/OrderContextProvider"

//css
import "./App.css"

function App() {

  return (
    <>
      <PizzaContextProvider>
        <PizzaImgDiv pizzaDB={pizzaDB} />
        <OrderContextProvider>
          <Ingredienser />
          <PriceDiv />
        </OrderContextProvider>
      </PizzaContextProvider>
    </>
  )
}

export default App