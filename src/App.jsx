import { useState } from "react";

function App() {
  // let number = 0;
  /*
  useState es ASINCRONO
  si nos fijamos hay diferencias entre lo que se ve en pantalla (el valor real de number)
  y el console.log(), si quisieramos usar el valor de number para algo de la logica deberemos 
  usar el hook useEffect
  */
  const [number, setNumber] = useState(0);

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div>
      <h1>Hola a todos</h1>

      <h2 onClick={addOne}>Number: {number}</h2>
    </div>
  );
}

export default App;
