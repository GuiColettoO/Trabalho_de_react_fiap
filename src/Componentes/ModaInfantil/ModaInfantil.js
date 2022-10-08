import React from "react";
import Styled from 'styled-components';

const DivModaInfantil = Styled.div`
    font-family: "Poppins",sans-serif;

    h1 {
        padding: 20px;
        font-size: 40px;
        color: black;
    }

    ul {
        margin-top:45px;
        display: flex;
        list-style: none;
        justify-content: space-around; 
    }

    footer {
        background-color: #f2f2f2;
        position: absolute;
        width: 100%;
    }
`;

export default () => {
    return(
        <DivModaInfantil>
            <section>
                <h1>Coleção Feminina</h1>
                <ul>
                    <li>
                        <img src="/imagens/infantil.png" width="100%" height="700x"/>
                        <h2>produto 1</h2>
                        <p>valor do produto</p>
                    </li>
                    <li>
                        <img src="/imagens/infantil.png" width="100%" height="700x"/>
                        <h2>produto 1</h2>
                        <p>valor do produto</p>
                    </li>
                    <li>
                        <img src="/imagens/infantil.png" width="100%" height="700x"/>
                        <h2>produto 1</h2>
                        <p>valor do produto</p>
                    </li>
                </ul>
            </section>
            <footer>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </footer>
        </DivModaInfantil>
    );
};