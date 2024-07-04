import "./App.css";
import { detalleCard } from "./data/data.js";
import CardApp from "./components/CardApp.jsx";
import CarouselApp from "./components/CarouselApp.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";

function App() {

  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  }

  return (
    <>
    <div className={modoOscuro? "bg-dark" : ""}>
      <NavBar cambiarModoOscuro = {cambiarModoOscuro} modoOscuro={modoOscuro}/>
      <CarouselApp />
      <div className="container" >
        <div className="row">
          {detalleCard.map((item, index) => (
            <CardApp item={item} key={index} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
