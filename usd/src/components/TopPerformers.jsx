import React from 'react'
import { TopPerformersContainer, TopPerformersRow,TopPerformersColumn, TopPerformersText, TopPerformersPercentage } from './styled/TopPerformers'

import { Avatar } from './styled/Avatar'
import { performersData } from '../../topPerformers'

function TopPerformers({imageURL, name, productivity}) {
  return (
    <TopPerformersContainer>
        <TopPerformersText>Top Performers (Weekly)</TopPerformersText>
        {performersData.map((item, index)=> 
        <TopPerformersRow key={index}>
        <Avatar src={item.imageURL}/> 
        <TopPerformersColumn>
            <TopPerformersText>{item.name}</TopPerformersText>
        </TopPerformersColumn>
        </TopPerformersRow>
        )}
    </TopPerformersContainer>
  )
}

export default TopPerformers