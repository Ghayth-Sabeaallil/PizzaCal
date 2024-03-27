//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"

//

//data
import pizzaDB from "../assets/pizza.json"
import PizzaContextProvider from "./Components/PizzaContext/PizzaContextProvider"
import Ingredienser from "./Components/Ingredienser/Ingredienser"
import OrderContextProvider from "./Components/OrderContext/OrderContextProvider"
import PriceDiv from "./Components/PriceDiv/PriceDiv"

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