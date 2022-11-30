import React from 'react'
import { ContainerStyled } from '../styled-components/Container.styled'
import { typedTextDiv } from '../styled-components/TypedTextDiv.styled'
import Typed from 'react-typed'

export default function Container() {
  return (
    <ContainerStyled>
      <typedTextDiv>
        <Typed
          strings={[
            'Hello, I am a Frontend Developer',
            'I am a React Developer']}
          typeSpeed={40} >
          </Typed>
      </typedTextDiv>
    </ContainerStyled>
  )
}
