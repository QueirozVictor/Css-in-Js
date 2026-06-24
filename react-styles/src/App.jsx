import './App.css'
import styled from '@emotion/styled';
import Card from './components/CardProduto';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px ridge lightgray;
border-radius: 5px;
box-shadow: 0px 0px 3px gray;
margin: 10px;
padding: 10px;
`;

const Titulo = styled.h1`
font-size: 1rem;
color: #0e0e0e;
text-align: justify;
text-shadow: 1px 1px 1px lightgray;
align-self: center;
width: 70%;

`;

function App() { 

  return (
    
    <Container>
      <Titulo>Este é um exemplo de componente utilizando @Emotion no React para estilização dinamica CSS-in-Js.</Titulo>
      <Card/>
    </Container>
    
  )
}

export default App
