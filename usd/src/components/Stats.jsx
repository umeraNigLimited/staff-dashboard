import React from 'react'
import styled from 'styled-components'

// const Container = styled.div`
//       display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f5f5f5;
// `

const Outerdiv = styled.div`
     position: relative;
  width: 150px;
  height: 150px;
  background: conic-gradient(
    #890709 0%,
    #890709 5%,
    #d3d3d3 5%,
    #d3d3d3 100%
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Innerdiv = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Stats() {
  return ( 
    <Outerdiv>
        <Innerdiv/>
    </Outerdiv>
     
  )
}

export default Stats