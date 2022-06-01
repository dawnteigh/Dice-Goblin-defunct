import React from 'react'
import DieCard from './DieCard'


const DieList = ({ dice, setSelectedDie }) => {

    const displayDice = dice.map(d => {
        return (
        <a href={`#${d.id}`} key={d.id} onClick={(e) => setSelectedDie(d)} >
            <DieCard key={d.id} die={d} />
        </a>
    )})
  return (
    <div>
        {displayDice}
    </div>
  )
}

export default DieList