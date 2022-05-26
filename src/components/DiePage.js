import React, { useState, useEffect } from 'react'
import DieForm from './DieForm'

const DiePage = ({ die }) => {

  const [dice, setDice] = useState([])

  const numOfButtons = parseInt(die.replace(/\D/g, ''))
  const looper = (num) => {
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      if (die === "d10") {
        numArray.push(i - 1)
      }
      else if (die === "d10p") {
        numArray.push(i - 1 + '0')
      }
      else {
        numArray.push(i)
      }
    }
    return numArray
  }

  const diceValues = looper(numOfButtons)

  const objectifyValues = (arr) => {
    let obj = {};
    for (const key of arr) {
      obj[key] = 0;
    }
    return obj
  }

  const valuesObj = objectifyValues(diceValues)

  

  useEffect(() => {
    fetch(`http://localhost:6001/${die}`)
    .then(r => r.json())
    .then(data => setDice(data))
    .catch(err => console.log("yo bud something aint right"))
    console.log(valuesObj)
  }, [die])

  return (
    <div>
      {die}
      <DieForm />
    </div>
  )
}

export default DiePage