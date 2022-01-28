import react from "react";
import {Link} from "react-router-dom";

export default class Menu extends react.Component{
    render(){
        return <di>
            <ul>
                <li><Link to= "/">Index</Link></li>
                <li><Link to= "/datos1">Datos 1</Link></li>
                <li><Link to= "/datos2">Datos 2</Link></li>
            </ul>
        </di>
    }
}