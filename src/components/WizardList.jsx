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

    let clone = JSON.parse(JSON.stringify(wizards))
    clone.unshift(randomWizard) // añadelo al inicio del array

    setWizards(clone)

    // setWizards( [randomWizard, ...wizards ] )

  }

  return (
    <div>
      
      <h2>Lista de Personajes de Harry Potter</h2>

      <button onClick={handleAddWizard}>Añadir uno aleatorio</button>

      {wizards.map((eachWizard, i) => {
        return (
          <div key={eachWizard.id}>
            <hr />
            <h3>{eachWizard.name}</h3>
            <p>{eachWizard.description}</p>
          </div>
        )
      })}

    </div>
  )
}

export default WizardList