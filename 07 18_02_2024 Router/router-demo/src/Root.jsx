import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <div>
        <Link style={{ margin: 10 }} to="Home">Home</Link> |
        <Link style={{ margin: 10 }} to="about">About</Link> |
        <Link style={{ margin: 10 }} to="menu/7">Menu</Link> | <br />

        START OUTLET 
        <Outlet />
        END OUTLET
      </div>

    </div>
  )
}
