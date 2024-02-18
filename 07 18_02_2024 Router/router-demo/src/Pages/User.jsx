import React from 'react'
import { useLocation } from 'react-router-dom'

export default function User() {
  const { state } = useLocation();
  let userObj = state;
  return (
    <div>User <br />
      user id = {userObj.id} <br />
      user name = {userObj.name}
    </div>
  )
}
