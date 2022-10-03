import React from 'react'
import { Container } from './styles'

const GameOver = ({ retry, score }) => {
  return (
    <Container>
        <h1>Fim de Jogo!</h1>
        <h2>A sua pontuacao foi : <span>{score}</span></h2>
        <button onClick={retry}>Resetar Jogo</button>
    </Container>
  )
}

export default GameOver