
// Hämta ner json
// Mappa ut ingredienserna
// Sätt ett pris 
// fixa css:en

const ToppingsBox = () => {
  return (
    <>
      <h2>Extra Topping: 10:- / styck</h2>
      <div className="checkboxContainer">
        <input type="checkbox" id="mozzarellaost"/>
        <label htmlFor="mozzarellaost">Mozzarellaost</label>
        <input type="checkbox" id="tomatsås"/>
        <label htmlFor="tomatsås">Tomatsås</label>
        <input type="checkbox" id="skinka"/>
        <label htmlFor="skinka">Skinka</label>
        <input type="checkbox" id="champinjoner"/>
        <label htmlFor="champinjoner">Champinjoner</label>
        <input type="checkbox" id="basilika"/>
        <label htmlFor="basilika">Färsk Basilika</label>
        <input type="checkbox" id="pepperoni"/>
        <label htmlFor="pepperoni">Pepperoni</label>
        <input type="checkbox" id="artiskock"/>
        <label htmlFor="artiskock">Artiskockshjärtan</label>
        <input type="checkbox" id="oliver"/>
        <label htmlFor="oliver">Oliver</label>
        <input type="checkbox" id="räkor"/>
        <label htmlFor="räkor">Räkor</label>
        <input type="checkbox" id="ananas"/>
        <label htmlFor="ananas">Ananas</label>
        <input type="checkbox" id="jalapenos"/>
        <label htmlFor="jalapenos">Jalapeños</label>
        <input type="checkbox" id="lök"/>
        <label htmlFor="lök">Lök</label>
        <input type="checkbox" id="paprika"/>
        <label htmlFor="paprika">Paprika</label>
        <input type="checkbox" id="majs"/>
        <label htmlFor="majs">Majs</label>
        <input type="checkbox" id="gorgonzola"/>
        <label htmlFor="gorgonzola">Gorgonzola</label>
        <input type="checkbox" id="ricotta"/>
        <label htmlFor="ricotta">Ricotta</label>
        <input type="checkbox" id="parmesan"/>
        <label htmlFor="parmesan">Parmesan</label>
      </div>
    </>
  );
};

export default ToppingsBox;
