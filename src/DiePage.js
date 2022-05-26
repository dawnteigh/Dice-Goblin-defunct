import React, { useEffect } from 'react'

const DiePage = ({ die }) => {
  const numOfButtons = parseInt(die.replace(/\D/g, ''))
  const looper = (num) => {
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i)
    }
    return numArray
  }
  const diceValues = looper(numOfButtons)

  useEffect(() => {
    console.log(diceValues)
  }, [])

  return (
    <div>
      {die}
    </div>
  )
}

export default DiePage