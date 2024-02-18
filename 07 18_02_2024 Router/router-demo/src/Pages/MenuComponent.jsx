import React from 'react'
import { useParams } from 'react-router-dom'

export default function MenuComponent() {
  const params = useParams();
  return (
    <div>MenuComponent <br />
      userId = {params.userId}
    </div>
  )
}
