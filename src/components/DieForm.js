import React, { useState } from 'react'

const DieForm = ({ addDie }) => {

    const [desc, setDesc] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addDie(desc)
        e.target.reset()
    }

  return (
    <div>
        <h3>Add New Die!</h3>
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => setDesc(e.target.value)} type="text" size="20" placeholder="Die Description" />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default DieForm