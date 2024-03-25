import Card from "./Components/Card/Card"
import ToppingBox from "./Components/Ingredients/IngredientsBox"
import "./App.css"

function App() {

  return (
    <>

      <Card />
      <ToppingBox />
    </>
  )
}

export default App


const DefaultPizza = [
  {
    cheese: "Mozzarela",
    sauce: "Tomatosauce"
  }
]