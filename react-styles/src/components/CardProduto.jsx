import { useState } from 'react';
import  styled  from '@emotion/styled'



const Card = styled.div`
display: flex;
flex-direction: column;
align-self: center;
gap: 10px;
border: 1px solid lightgray;
border-radius: 8px;
box-shadow: 1px 1px 5px gray;
margin-top: 10%;
padding: 10px;
width: 70%;
`;

const NomeProduto = styled.h1`
font-size: 2rem;
color: #282828;
text-shadow: 1px 1px 1px lightgray;
`;

const ImagemProduto = styled.img`
width: 100%;
object-fit: cover;
border-radius: 5px;
`;


const PrecoProduto = styled.h3`
color: red;
font-size
text-shadow: 1px 1px 1px lightgray;
`;

const Botao = styled.button`
background-color: ${({adicionado}) => adicionado ? "#198754"  : "#6c757d"};
border: none;
border-radius: 8px;
color: white;
padding: 10px;
text-shadow: 1px 1px 0px lightgray;

`;


function CardProduto() {

    const [adicionado, setAdicionado] = useState(false);
    
    return(
        
    <Card>
        <NomeProduto>Produto</NomeProduto>
        <ImagemProduto 
            src="https://placehold.co/100x50"
            alt="Produto"
        />

        <PrecoProduto>R$ 250,00</PrecoProduto>

        <Botao 
            adicionado = {adicionado} 
            onClick={() => setAdicionado(!adicionado)}
        >
            {adicionado ? " 🛒 Adicionado!" : "🛒 Adicionar"}
        </Botao>

    </Card>

)


}

export default CardProduto;