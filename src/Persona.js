import React from "react";
import Personas from "./Personas.json";
import { useParams } from "react-router-dom";
import './Persona.css'; 

function Persona() {
  const { id } = useParams();

  const persona = Personas.find((persona) => persona.id === id);

  if (!persona) {
    return <div>La persona no fue encontrada!</div>;
  }

  return (
  <>
    <h1 className="titulo"> Contacto </h1>
    
    <div className=""> 
      <div class="card border-danger mb-3">
      <div class="card-body text-danger">
        
  <div class="card-header">La persona número {persona.id}</div>
  <br></br>
  
    <h2 class="card-title">{persona.nombre} {persona.apellido}</h2>
    <p class="card-text">Email: <b>{persona.email}</b></p>
    <p class="card-text">Edad: <b>{persona.edad}</b></p>
  </div>
</div>
    </div>
    </>
  );
}

export default Persona;
