import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Datos00 from "../componentes/Datos00";
import Datos01 from "../componentes/Datos01";
import Datos02 from "../componentes/Datos02";
import Error from "../componentes/Error";

export default class Rutas extends react.Component{
    render(){
        return(<div>
            <BrowserRouter>
            <Routes>
                <Route exact path= '/' element={<     Datos00    />} />
                <Route exact path= '/datos1' element= {<   Datos01  />} />
                <Route exact path= '/datos2' element= {<   Datos02  />} />
                <Route path= '' element= {<        Error      />} />
                
            </Routes>

            </BrowserRouter>
        </div>)
    }
}