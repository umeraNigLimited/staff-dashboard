import React from 'react'
import { ProductivityContainer, ProductivityRowFlex, ProductivityText } from './styled/Productivity'
import { ViewStats } from './styled/Shared'
import AreaCharts from './AreaCharts'

function Productivity() {
  return (
    <ProductivityContainer>
        <ProductivityRowFlex>
        <ProductivityText>
            Productivity
        </ProductivityText>
            <ViewStats>View Stats</ViewStats>
        </ProductivityRowFlex>
       <AreaCharts/>
    </ProductivityContainer>
  )
}

export default Productivity