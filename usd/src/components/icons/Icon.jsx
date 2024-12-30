import React from 'react'
import { IconContainer} from './Icons'

function Icon({children, onClick}) {
  return (
   <IconContainer onClick={onClick}>
        {children}
   </IconContainer>
  )
}

export default Icon