import React from "react";
import Styled from 'styled-components';
import { Link } from "react-router-dom";

const DivHome = Styled.div`
    {
        font-family: "Poppins",sans-serif;
    }

    h1{
        padding: 20px;
        font-size: 40px;
        color: black;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: space-around; 
    }

    ul li{
        display: inline-block;
        border: solid rgba(0, 0, 0, 0.7) 1px;
    }

    .um{
        position: absolute;
        font-family: "Gayathri", sans-serif;
        font-size: 35px;
        font-weight: bold;
        top: 135%;
        left: 11.5%;
        color: black;
    }

    .dois{
        position: absolute;
        font-family: "Gayathri", sans-serif;
        font-size: 35px;
        font-weight: bold;
        top: 135%;
        left: 42.5%;
        color: black;
    }

    .tres{
        position: absolute;
        font-family: "Gayathri", sans-serif;
        font-size: 35px;
        font-weight: bold;
        top: 135%;
        left: 76.5%;
        color: black;
    }

    footer {
        background-color: #f2f2f2;
        position: absolute;
        width: 100%;
    }
    `;

export default () =>{
    return(
        <DivHome className="home">
            <img src="/imagens/home.png" width="100%" height="780px"/>
            <h1>Coleções</h1>
            <section>
                <ul>
                    <li>
                        <Link to='/ModaMasculina'><img src="/imagens/masculino.png" width="100%" height="700x"/>
                        <p className="um">Moda Masculina</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/ModaFeminina'>
                            <img src="/imagens/feminina.png" width="100%" height="700x" />
                            <p className="dois">Moda Feminina</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/ModaInfantil'>
                            <img src="/imagens/infantil.png" width="100%" height="700x" />
                            <p className="tres">Moda Infantil</p>
                        </Link>
                    </li>
                </ul>
            </section>
            <footer>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </footer>
        </DivHome>
    );
};