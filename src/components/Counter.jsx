
import { useState } from "react"
// useState es un Hook que nos permite acceder a la funcionalidad avanzada de Estados de React

function Counter(props) {

  // let counterValue = 0;

  //const algo = useState(10)
  //console.log(algo)
  // [0] es el valor del estado
  // [1] es la funcion que usaremos para actualizar el estado
  //let counterValue = algo[0]
  //let functionParaActualizarEstado = algo[1]

  const [ counterValue, setCounterValue ] = useState(props.num)
  const [ message, setMessage ] = useState("No hay valor registrado")

  const handleClick = () => {
    console.log("intentando incrementar el contador")
    // counterValue++
    // console.log(counterValue)
    // el hecho de que nosotros modificamos el valor de una variable, no le indica a react que debe renderizar nuevamente

    // para cambiar el estado SIEMPRE usamos la funcion que nos da react
    setCounterValue( counterValue + 1 ) // como argumento, el nuevo valor del estado
    // countervalues++ => counterValue = counterValue + 1
    // ! NUNCA DEBEMOS MODIFICAR EL ESTADO DIRECTAMENTE

    // react hace dos cosas
    // 1. Cambia el valor del estado
    // 2. Causa una renderización nueva del componente
  }

  const handleMessage = () => {
    setMessage(`El valor regitrado es: ${counterValue}`)
  }

  return (
    <div>
      
      <h3>Counter</h3>

      <h2>{counterValue}</h2>

      <button onClick={handleClick}>+</button>

      <h4>{message}</h4>

      <button onClick={handleMessage}>Para registrar el numero</button>

    </div>
  )
}

export default Counter