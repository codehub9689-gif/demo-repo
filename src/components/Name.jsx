import React from 'react'
import { useParams } from 'react-router-dom'

function Name() {

    const {name} = useParams()
    console.log(name)
  return (
    <div>Hi {name}</div>
  )
}

export default Name