import { useState } from "react"
import allWizards from "../data/wizards.json"
console.log(allWizards)

function WizardList() {

  const [ wizards, setWizards ] = useState(allWizards.slice(0, 3))

  const handleAddWizard = () => {
    console.log("intentando añadir un nuevo hechicero")
    let randomNumber = Math.random() * allWizards.length // 0 - 202
    let randomIndex = Math.floor(randomNumber)
    let randomWizard = allWizards[randomIndex]

    // como lo añadimos a wizards
    // wizards.push() // ! NUNCA DEBEMOS MUTAR EL ESTADO DIRECTAMENTE
    // ! MEGA BONUS
    let repeatedWizard = wizards.find((eachWizard) => {
      if (eachWizard.id === randomWizard.id) {
        // console.log("elemento duplicado", randomWizard.name)
        return true
      }
    })

    console.log("elemento duplicado", repeatedWizard, "haciendo recursion")
    if (repeatedWizard !== undefined) {
      // está duplicado
      handleAddWizard()
      return;
    }

    let clone = JSON.parse(JSON.stringify(wizards))
    clone.unshift(randomWizard) // añadelo al inicio del array

    setWizards(clone)

    // setWizards( [randomWizard, ...wizards ] )



  }

  const handleSortWizards = () => {
    console.log("intentando ordenar")

    let clone = JSON.parse(JSON.stringify(wizards))

    clone.sort((wiz1, wiz2) => {
      // if (wiz1.name > wiz2.name) {
      //   return 1
      // } else {
      //   return -1
      // }

      return wiz1.name > wiz2.name ? 1 : -1
      // otra forma es usando localeCompare en el sort (más recomendada)

    })

    setWizards(clone)

  }

  const handleDeleteWizard = (id) => {
    console.log("intentando borrar un wizard", id)
    // console.log(e.target)

    // ? como pasamos algun identificativo del elemento que queremos borrar

    // ? como lo borramos => splice(posicion a borrar) // filter (id)
    // let clone = JSON.parse(JSON.stringify(wizards))
    // clone.splice(index, 1) // cortamos de la posición "index", 1 elemento

    let filteredArr = wizards.filter((eachWizard) => {
      if (eachWizard.id === id) {
        return false
      } else {
        return true
      }
    })

    // ? como actualizamos el estado
    setWizards(filteredArr)
  }

  return (
    <div>
      
      <h2>Lista de Personajes de Harry Potter</h2>

      <button onClick={handleAddWizard}>Añadir uno aleatorio</button>
      <button onClick={handleSortWizards}>Orderlos alfabeticamente</button>

      {wizards.map((eachWizard, i) => {

        return (
          <div key={eachWizard.id}>
            <hr />
            <h3>{eachWizard.name}</h3>
            <p>{eachWizard.description}</p>
            <button onClick={() => handleDeleteWizard(eachWizard.id)}>Borrar</button>
          </div>
        )
      })}

    </div>
  )
}

export default WizardList