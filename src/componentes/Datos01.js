import React from "react";
import reactDom from "react-dom";
import Menu from "../rutas/Menu";
var num1 =10
var num2 =10

/*
function Datos01(props){
    return <div>
        <h2>{ props.titulo }</h2><br/>
        <img src={props.images} alt="Cuervo"/> <br/>
        <b>Fecha Cuando Conoci a Lilo</b>: {props.date} <br/>
        {num1} + {num2} = {num1+num2}       
        </div>
}

export default Datos01
*/

export default function Datos01(props){
    return <div>
        <Menu /><br> 
         </br>
        <h2>{ props.titulo }</h2><br/>
        <img src={props.images} alt="Cuervo"/> <br/>
        <b>Fecha Cuando Conoci a Lilo</b>: {props.date} <br/>
        {num1} + {num2} = {num1+num2} 
        <br/>      
        {props.images}
        </div>
}
