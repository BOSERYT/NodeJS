import React from "react";
import images1 from "./images/user.png"
import images2 from "./images/codg.png"

export default function Datos03(props){
    return <div>

<center>
    <div class="card text-white bg-success mb-3" style={{width: '402px'}}>
      <h3>Universidad Tecnológica 
       <br/> del Valle de Toluca</h3>
       
    <div class="card text-white bg-dark mb-3" style= {{width: '400px'}}>
    <br/>
 
    <center> <img class="card-img-top" src={images1} style={{border: '4px solid #008f39', borderRadius: '500px', width: '300px'}}  alt="Card image cap"/> </center>
    
  <div class="card-body">
  <div class="card border-success mb-3" style={{width: '352px', height: '311px'}}>
  <div class="card text-white bg-dark mb-3">
  <p class="card-text"> <b>Matricula:</b>
    <h4>222010068</h4></p>
    <p class="card-text"><b>Nombre:</b>
    <h4>Juan Daniel 
      <br/>Flores Hernandez</h4></p>
      <p class="card-text"> <b>Grupo:</b>
    <h4>DSM-53</h4></p>
    <p class="card-text"> <b>Alumno Inscrito el 10 <br/>de Enero del 2022</b></p>
  </div>
</div>
</div>
</div>
<center> <img class="card-img-top" src={images2} style={{border: '5px solid #0000', width: '300px', height: '100px'}}  alt="Card image cap"/> </center>
<h4>ALUMNO DE T.S.U</h4>
</div>
</center>

</div>
}