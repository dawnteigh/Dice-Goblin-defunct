import React, { useState, useEffect } from 'react'
import DieForm from './DieForm'
import DieDisplay from './DieDisplay'
import DieList from './DieList'

const DiePage = ({ die }) => {

  const [dice, setDice] = useState([])
  const [selectedDie, setSelectedDie] = useState(null)

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
  }, [])

  const addDie = (desc) => {
    fetch(`http://localhost:6001/${die}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify({
          values: valuesObj,
          desc: desc,
          total: 0,
          avg: 0
        })
    })
    .then(r => r.json())
    .then(data => setDice([...dice, data]))
    .catch(err => console.log("man, you goofed"))
  }

  return (
    <div>
      {die}
      <DieForm addDie={addDie} />
      { selectedDie === null ? null : <DieDisplay die={selectedDie} /> }
      <DieList diePage={die} dice={dice} setSelectedDie={setSelectedDie} />
    </div>
  )
}

export default DiePage