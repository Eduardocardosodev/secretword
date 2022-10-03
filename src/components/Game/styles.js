import styled from 'styled-components';

export const Container = styled.div`
  h1{
    font-size: 2.5em;
  }

  h3{

  }
`;

export const Points = styled.div`
  span {
    font-weight: bold;
  }
`;

export const WordContainer = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;

    .letter,
    .blankSquare {
    font-size: 70px;
    line-height: 1.5;
    border: 3px solid #000;
    height: 100px;
    width: 100px;
    text-transform: uppercase;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    }
`;

export const LetterContainer = styled.div`
  p{
    margin-bottom: 1.2em;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input{
    height: 50px;
    width: 50px;
    font-size: 2em;
    text-align: center;
    margin-right: 1em;
  }
`;

export const WrongLettersContainer = styled.div`
  
`;
