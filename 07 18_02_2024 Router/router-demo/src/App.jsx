import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import MenuComponent from './Pages/MenuComponent'
import User from './Pages/User'

export default function App() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/menu/7">Menu</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:userId" element={<MenuComponent />} />
        <Route path="/user" element={<User />} />
      </Routes>

    </div>
  )
}
