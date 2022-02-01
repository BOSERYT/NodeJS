import React from 'react';
import reactDom from 'react-dom';
import images from './images/logo_utvt.jpg'
import images1 from './images/user.png'
import images2 from './images/codg.png'
import images3 from './images/cuervo.jpg'
import './css/style.css'

var nombre = <h1>Danii</h1>


reactDom.render(<div> 
    < img src={images} style= {{border: 'px solid #f00', borderRadius: '200px'}} alt ="Logo UTVT"/> <br/>
    {nombre}
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


        </div>,document.getElementById('root1'));


    //...............................................

    const num1 =10;
    const num2 =5;
    const numeros ={n1:10, n2:7, n3:11}
    const objeto = <div>
      <hr/>
      <h2>Operadores Matematicos</h2>
      <br/>
      {numeros.n1} + {num1} = {numeros.n1+num1} <br/>
      {num2}*{numeros.n3}={numeros.n3*num2}<br/>
      <br/>
      {(numeros.n2 < 100)? 'El numero es menor':' El numero es mayor'}
    </div>
const salida = document.getElementById('otros1');
reactDom.render(objeto,salida) 

//..................................................

function datos1(){
  return <div><h2>Funcion N1 (<b>Sin parametros</b>)</h2></div>
}

function datos2(nums, texto){
  return texto +':' +(numeros.n1+numeros.n2)
}
let ListNum = []

const lista = () => {
  for (var x=0; x<10; x++){
  ListNum.push(<li key={x}>{x+1}</li>);
}
return ListNum;
}

const text = "datos numericos";
const objeto2 = <div>
{ datos1() } <br/>
{ datos2(numeros, text) } <br/>
<ul>{lista()}</ul> 
</div>

reactDom.render(objeto2, document.getElementById('funciones1'))