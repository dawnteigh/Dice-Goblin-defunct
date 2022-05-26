import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ dice }) => {

    const links = dice.map(die => {
        return (
            <NavLink key={die} to={`/${die}`} >
                {die}
            </NavLink>
        )
    })
  return (
    <div>
        {links}
    </div>
  )
}

export default NavBar