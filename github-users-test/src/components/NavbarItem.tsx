import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  route: string
  text: string
}

const NavbarItem: React.FC<Props> = ({
  route,
  text
}) => {
  return (
    <NavLink to={route}
      className={({ isActive, isPending }) =>
        `navbar-item text-white text-lg font-bold ${isActive ? 'text-cyan-400' : ''} ${isPending ? 'pending' : ''}`
      }
    >
      {text}
    </NavLink >
  )
}

export default NavbarItem