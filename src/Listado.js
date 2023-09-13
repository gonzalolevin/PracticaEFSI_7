import { useState, useEffect } from 'react';
import Personas from './Personas.js';
import { Link } from 'react-router-dom';

function Listado(){
    return(
            <>
            {Personas.map ((persona =>{
                    <div key = {persona.id}>

                    <Link to = {`Persona ${persona.id}`}></Link>
                    </div>
                } ))
                }

            </>
    )
}
export default Listado;

