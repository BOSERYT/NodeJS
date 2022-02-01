import React from "react";
import Menu from "../rutas/Menu";
import Mostrar from "./Mostrar_Credenciales";


import img1 from "../images/cuervo.jpg";

var item = [
    {
        id: '01',
        matricula: '222010068',
        img: img1,
        name: 'Juan Daniel Flores Hernandez',
        grupo: 'DSM 53',
        fecha: '21/10/2002',
        genero: 'Masculino',
        carrera: 'Ingenieria en Sistemas Computacionales',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf',
    },
];

export default class Datos extends React.Component {
    render(){
        return(
            <div className="conteiner">
                <Menu/>
                <h3>Credenciales Ejemplos</h3>
                <div>
                    <Mostrar info={item}/>
                </div>
            </div>    
        )
    }
}
