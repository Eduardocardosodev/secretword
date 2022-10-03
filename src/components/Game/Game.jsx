import React from 'react'
import { useState, useRef } from 'react'
import { Container, WordContainer, LetterContainer, WrongLettersContainer } from './styles'

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      verifyLetter(letter);

      setLetter('');

      letterInputRef.current.focus();
    }

  return (
    <Container>
        <p>
          <span>Pontuacao: {score}</span>
        </p>
        <h1>adivinhe a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Voce ainda tem {guesses} tentativas</p>
        <WordContainer>
            {letters.map((letter, i) => 
              guessedLetters.includes(letter) ? (
                <span key={i} className='letter'>
                  {letter}
                </span>
              ) : (
                <span key={i} className='blankSquare'></span>
              )
            )}
        </WordContainer>
        <LetterContainer>
          <p>Tente advinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="letter" 
              maxLength='1' 
              required 
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}/>
            <button>Jogar!</button>
          </form>
        </LetterContainer>
        <WrongLettersContainer>
          <p>Letras ja utilizadas:</p>
            {wrongLetters.map((letter, i) => (
              <span key={i}>{letter},</span>
            ))}
        </WrongLettersContainer>
    </Container>
  )
}

export default Game