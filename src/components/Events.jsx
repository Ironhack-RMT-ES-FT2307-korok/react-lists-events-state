
function Events() {

  const handleClick = () => {
    console.log("haciendo click")
  }

  const handleMouseLeave = () => {
    console.log("saliendo del div")
  }

  const handleChange = (event) => {
    console.log("escribiendo en el campo", event.target.value)
    // event => es toda la info del evento que está ocurriendo
    // event.target => es el elemento de DOM donde está ocurriendo el evento
    // event.target.value => es el valor del campo que el usuario está modificando
  }

  return (
    <div>

      <h3 onClick={handleClick}>Eventos</h3>

      {/* <button onClick={ () => console.log("click nuevo") }>Click</button> */}
      <button onClick={ handleClick }>Click</button>

      <button onDoubleClick={handleClick}>Otro click</button>

      <h1 onMouseEnter={handleClick} onMouseLeave={handleMouseLeave}>Hacer hover</h1>

      <input type="text" onChange={handleChange}/>
      <button>agregar</button>

    </div>
  )
}

export default Events


// addEventListener("click", () => {

// })