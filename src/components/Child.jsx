import { useEffect, useState } from "react";

function Child() {
  const [counter, setCounter] = useState(0);

  // si devolvemos una funcion, le indicamos a useEffect que queremos que esa funcion se ejecute 
  // cuando el componente se detruye en el ciclo de vida
  useEffect(() => {
    return () => {
      console.log("El componente se ha desmontado");
    }
  }, [])

  // el segundo parametro de useEffect nos permite indicar que variables de estado queremos vigilar
  // de manera que, en este ejemplo, useEffect solo ocurre cuando la var counter ccambia
  useEffect(()=>{
    console.log("la variable counter ha cambiado")
  }, [counter])

  return (
    <div className="child">
      <h2>Este es un componente hijo</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Child;
