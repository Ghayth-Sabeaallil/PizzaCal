//components
import Card from "./Components/Card/Card"

//data
import pizzaDB from "../assets/pizza.json"

function App() {

  return (
    <>

      <Card pizzaDB={pizzaDB} />

    </>
  )
}

export default App
