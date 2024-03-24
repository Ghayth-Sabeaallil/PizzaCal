//components
import PizzaImgDiv from "./Components/PizzaImgDiv/PizzaImgDiv"
import PizzaAntalDiv from "./Components/PizzaAntalDiv/PizzaAntalDiv"


//data
import pizzaDB from "../assets/pizza.json"
import Container from "./Components/ContainerRoot/Container"

function App() {

  return (
    <>
      <Container PizzaAntalDiv={<PizzaImgDiv pizzaDB={pizzaDB} />} PizzaImgDiv={<PizzaAntalDiv />} />


    </>
  )
}

export default App