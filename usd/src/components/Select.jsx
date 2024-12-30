import React from 'react'
import { SelectStyle } from './styled/Form'

function Select({children, id , value, onChange}) {
  return (
    <SelectStyle id={id} value={value} onChange={onChange}>
        {children}
    </SelectStyle>
  )
}

export default Select