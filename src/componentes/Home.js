import img from '../images/cuervo.jpg';
import Menu from '../rutas/Menu';

import header from '../images/logo_utvt.jpg';
import logo from '../images/cuervo.jpg';
import persona from '../images/logo_utvt.jpg';
import '../css/style.css';
import Credencial from '../componentes/Credencial';



const fecha='Inscrito el 13 de Enero del 2022';


export default function Home(props){
    return(
        <div>
            <Menu/>
            <h3>Inicio</h3>

            <img src={img} className="img-fluid" alt="Imagen del cuervo logo de la UTVT"/>


           
        </div>
    )
}


<img src={img} className="img-fluid" alt="Imagen del cuervo logo de la UTVT"/>


//<Credencial matricula='al222010068' header={header} logo={logo} persona={persona} nombre='Juan Daniel Flores Hernandez' grupo='DSM 53' fecha='21/10/2002' texto='Esta credencial certifica que la persona mencionada' texto2=' es estudiante de la UTVT' inscripcion={fecha}/>//