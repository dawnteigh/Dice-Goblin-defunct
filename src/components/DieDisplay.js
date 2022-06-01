import React from 'react'

const DieDisplay = ({ die }) => {

    const { values, desc, total, avg } = die
    const buttons = Object.keys(values).map(num => {
            return (
                <div key={num}>
                <button id={num} >{num}</button>
                <br/>
                </div>
            )        
    })

  return (
    <div>
        {die.desc}
        <br/>
        {die ? buttons : null}    
    </div>
  )
}

export default DieDisplay