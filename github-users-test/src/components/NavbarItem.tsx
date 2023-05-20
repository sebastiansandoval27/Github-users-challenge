import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

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
        `navbar-item text-white textcy text-lg font-bold ${isActive ? 'link-active' : 'link'} ${isPending ? 'link-pending' : 'link'}`
      }
    >
      {text}
    </NavLink >
  )
}

export default NavbarItem