function List() {

  const someInfo = ["patata", "banana", "tomate", "aguacate"]

  // const someInfoJSX = [ <li>patata</li>, <li>banana</li>, <li>tomate</li>, <li>aguacate</li>]

  // const someInfoJSX = someInfo.map((eachElement) => {
  //   return <li>{eachElement}</li>
  // })

  const ninjaTurtles = [
    {
      name: "leonardo",
      weapon: "katana",
    },
    {
      name: "raphael",
      weapon: "sai",
    },
    {
      name: "donatello",
      weapon: "bo",
    },
    {
      name: "michelangelo",
      weapon: "nunchaku",
    },
    {
      name: "splinter",
      weapon: "cane",
    }
  ]

  return (
    <div>
      
      {someInfo.map((eachElement, i) => {
        return (
          <li key={i}>{eachElement}</li>
        )
      })}

      {/* <div>
        <h3>Raphael</h3>
        <p>Sai</p>
      </div> */}

      {ninjaTurtles.map((eachElement, i) => {
        console.log(eachElement)
        // let emoji;
        // if (eachElement.name === "splinter") {
        //   emoji = "🐀"
        // } else {
        //   emoji = "🐢"
        // }
        return (
          <div key={i}>
            <p>{eachElement.name === "splinter" ? "🐀" : "🐢"}</p>
            <h3>{eachElement.name}</h3>
            <p>{eachElement.weapon}</p>

            {/* operador ternario */}
            <p>{eachElement.name === "michelangelo" ? "Es la mejor! ⭐" : null} </p>

            {/* operador de corto circuito */}
            <p>{eachElement.name === "michelangelo" && "Es la mejor! ⭐"}</p>
          </div>
        )
      })}

      {/* [
        <div key={0}>
          <h3>leonardo</h3>
          <p>katana</p>
        </div>,
        <div key={1}>
          <h3>raphael</h3>
          <p>sai</p>
        </div>
      ]       */}


    </div>
  )
}

export default List

// rfce => con el export abajo
// rfc => con el export en la misma linea