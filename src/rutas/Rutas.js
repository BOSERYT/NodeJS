import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../componentes/Home";
import Datos0 from "../componentes/Datos00";
import Datos1 from "../componentes/Datos01";
import Datos2 from "../componentes/Datos02";
import Datos3 from "../componentes/Datos03";
import Datos4 from "../componentes/Datos04";
import Datos5 from "../componentes/Datos05";
import Error from "../componentes/Error";
import Credencial from "../componentes/Credencial";
import Datos from "../credentials/Datos_credenciales";
import Contenido2 from "../componentes/Contenido2";

export default class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/datos00" element={<Datos0 />} />
          <Route exact path="/datos01" element={<Datos1 />} />
          <Route exact path="/datos02" element={<Datos2 />} />
          <Route exact path="/datos03" element={<Datos3 />} />
          <Route exact path="/datos04" element={<Datos4 />} />
          <Route exact path="/datos05" element={<Datos5 />} />
          <Route exact path="/credential" element={<Credencial />} />
          <Route exact path="/mostrar_credenciales" element={<Datos />} />
          <Route exact path="/contenido2" element={<Contenido2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
