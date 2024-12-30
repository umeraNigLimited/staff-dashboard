import React from 'react'
import { OptionStyle } from './styled/Form'

function Option({value, name}) {
  return (
<OptionStyle value={value}>
  {name}
</OptionStyle>
  )
}

export default Option