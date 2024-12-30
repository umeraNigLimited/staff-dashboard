import React from 'react'
import { SideBarCreateContainer, SideBarCreateText } from './styled/SideBarCreate'
import Icon from './icons/Icon'
import { AddIcon, IconText } from './icons/Icons'

function SideBarCreate({name}) {
  return (
    <SideBarCreateContainer>
          <SideBarCreateText>
              {name}
          </SideBarCreateText>
          <Icon>
            <AddIcon/>
            <IconText>Add</IconText>
          </Icon>
    </SideBarCreateContainer>
  )
}

export default SideBarCreate