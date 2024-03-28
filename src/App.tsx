//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"

//

//data
import pizzaDB from "../assets/pizza.json"
import PizzaContextProvider from "./Components/PizzaContext/PizzaContextProvider"
import Ingredienser from "./Components/Ingredienser/Ingredienser"
<<<<<<< Updated upstream
import OrderContextProvider from "./Components/OrderContext/OrderContextProvider"
import PriceDiv from "./Components/PriceDiv/PriceDiv"
=======
import CalcPizza from "./Components/CalcPizza/CalcPizz"
>>>>>>> Stashed changes

function App() {

  return (
    <>
      <PizzaContextProvider>
<<<<<<< Updated upstream
        <PizzaImgDiv pizzaDB={pizzaDB} />
        <OrderContextProvider>
          <Ingredienser />
          <PriceDiv />
        </OrderContextProvider>
=======
        <Container PizzaImgDiv={<PizzaImgDiv pizzaDB={pizzaDB} />} />
        <Ingredienser />
        <CalcPizza />
>>>>>>> Stashed changes
      </PizzaContextProvider>
    </>
  )
}

export default App