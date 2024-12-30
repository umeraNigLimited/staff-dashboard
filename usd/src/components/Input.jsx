import React from 'react'
import { InputStyle } from './styled/Form'

function Input({placeholder, value, name, id}) {
  return (
    <InputStyle placeholder={placeholder} value={value} name={name} id={id}/>
  )
}

export default Input