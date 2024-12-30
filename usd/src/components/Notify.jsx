import React from 'react'
import { NotifyContainer } from './styled/Notify'

function Notify({numberOfNotifiication}) {
  return (
    <NotifyContainer>
        {numberOfNotifiication}
    </NotifyContainer>
  )
}

export default Notify