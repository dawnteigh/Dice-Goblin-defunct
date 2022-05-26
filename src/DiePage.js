import React from 'react'

const DiePage = ({ die }) => {
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
  console.log(diceValues)

  return (
    <div>
      {die}
    </div>
  )
}

export default DiePage