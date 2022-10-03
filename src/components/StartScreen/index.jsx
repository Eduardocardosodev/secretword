import React from 'react'
import { Container } from './styles'

const StartScreen = ({ startGame }) => {
  return (
    <Container>
        <h1>Secret Word</h1>
        <p>Clique no botao abaixo para comecar a jogar</p>
        <button onClick={startGame}>Comecar o jogo</button>
    </Container>
  )
}

export default StartScreen