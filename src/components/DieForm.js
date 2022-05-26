import React from 'react'

const DieForm = () => {
  return (
    <div>
        <h3>Add New Die!</h3>
        <form>
            <input type="text" size="20" placeholder="Die Description" />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default DieForm