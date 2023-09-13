import React, { useState, useEffect } from "react";
import Personas from './Personas.json';
import './Estadisticas.css'; 

function Estadisticas() {
  const [mayoresDe35, setMayoresDe35] = useState([]);
  const [personaMayorEdad, setPersonaMayorEdad] = useState(null);
  const [personaMenorEdad, setPersonaMenorEdad] = useState(null);

  useEffect(() => {
    const personasMayoresDe35 = Personas.filter(persona => persona.edad > 35);
    setMayoresDe35(personasMayoresDe35);

    const personaMayor = Personas.reduce((personaMax, persona) => {
      return persona.edad > personaMax.edad ? persona : personaMax;
    });
    setPersonaMayorEdad(personaMayor);

    const personaMenor = Personas.reduce((personaMin, persona) => {
      return persona.edad < personaMin.edad ? persona : personaMin;
    });
    setPersonaMenorEdad(personaMenor);
  }, []);

  return (
    <>
     <h1 className="titulo"> Estadisticas </h1>
     
      {personaMayorEdad && personaMenorEdad && (
        <>
          <div className=""> 
            <div class="card border-danger mb-3">
              <div class="card-body text-danger">
                <div class="card-header">La persona de mayor edad es ...</div>
                <br></br>
                <h2 class="card-title">{personaMayorEdad.nombre} {personaMayorEdad.apellido}</h2>
                <p class="card-text">Edad: <b>{personaMayorEdad.edad}</b></p>
              </div>
            </div>
          </div>

          <div className=""> 
            <div class="card border-warning mb-3">
              <div class="card-body text-warning">
                <div class="card-header">La persona de menor edad es ...</div>
                <br></br>
                <h2 class="card-title">{personaMenorEdad.nombre} {personaMenorEdad.apellido}</h2>
                <p class="card-text">Edad: <b>{personaMenorEdad.edad}</b></p>
              </div>
            </div>
          </div>
        </>
      )}

<div className="personas-list">
  <h2 className="titulo"> Los mayores de 35 años </h2>
  <ul>
    {mayoresDe35.map(persona => (
      <li key={persona.id}>{persona.nombre} {persona.apellido}, {persona.edad}.</li>
    ))}
  </ul>
</div>
    </>
  );
}

export default Estadisticas;
