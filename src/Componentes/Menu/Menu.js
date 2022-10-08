import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

    const DivMenu = styled.div`
        background-color: #000000;
        height: 12vh;
        display: flex;
        justify-content: center;
        

        ul{ display:flex;}

        ul li{list-style: none;}

        ul li a{display: inline-block; text-decoration: none; padding:20px; color: #fff; font-size:1.5em;}
        
    `

export default () =>{
    return(
        <DivMenu>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/ModaFeminina'>Moda Feminina</Link></li>
                <li><Link to='/ModaMasculina'>Moda Masculina</Link></li>
                <li><Link to='/ModaInfantil'>Moda Infantil</Link></li>
                <li><Link to='/Sobre'>Sobre</Link></li>
            </ul>
        </DivMenu>
    )
}