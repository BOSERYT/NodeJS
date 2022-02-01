import react from "react";

import Datos01 from "./Datos01";


import images from "../images/logo_utvt.jpg";
var fecha = "10/06/21"

export default class Datos00 extends react.Component{
    render(){
        return <div>
            <Datos01 titulo='Componentes Datos-01' images={images} date={fecha}/> <hr/> <br/>
        </div>
    }
}