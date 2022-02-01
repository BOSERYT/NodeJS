import React from "react";
import Menu from "../rutas/Menu";
import Contenido3 from "./Contenido3";
import img1 from "../images/user.png"


var id='01';
var img= img1;
var name= 'Juan Daniel Flores Hernandez';
var edad= '19';
var matricula='222010068';
var genero= 'Masculino';
var fecha= '26/02/2020';
var carrera= 'Ingenieria en Sistemas Computacionales';
var grupo= 'DSM 53';
var universidad= 'Universidad Tecnologica del Valle de Toluca';
var pdf= 'https://www.google.com/search?q=youtube+icon&tbm=isch&ved=2ahUKEwjh_5mU_9X1AhVbAp0JHbqNAAUQ2-cCegQIABAA&oq=youtube&gs_lcp=CgNpbWcQARgIMgcIIxDvAxAnMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQsQMQQzIICAAQgAQQsQNQAFgAYNQCaABwAHgAgAFaiAFakgEBMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=DLH0YeHJBNuE9PwPupuCKA&bih=1008&biw=1879&client=opera-gx&hs=fh2';


export  default class Datos5 extends  React.Component{
    render() {
        return(
            <div className="conteiner">
                <Menu/>
                <h1>Estados iniciales del componentesssss </h1>
                <Contenido3 
                id = {id}
                img = {img}
                name = {name}
                edad = {edad}
                matricula = {matricula}
                genero = {genero}
                fecha = {fecha}
                carrera = {carrera}
                grupo = {grupo}
                universidad = {universidad}
                pdf = {pdf}
                />
            </div>
        );
    }
}