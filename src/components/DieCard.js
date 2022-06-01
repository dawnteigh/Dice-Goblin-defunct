import React from 'react'

const DieCard = ({ die }) => {
  return (
        <div>
            <p><b>{die.desc}</b></p>
            <p>Average: {die.avg}</p>
            <p>Total Rolls: {die.total}</p>
        </div>
  )
}

export default DieCard