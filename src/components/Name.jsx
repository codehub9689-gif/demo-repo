import React from 'react'
import { useParams } from 'react-router-dom'

function Name() {

    const {name} = useParams()
    console.log(name)
  return (
    <div>hello {name}</div>
  )
}

export default Name