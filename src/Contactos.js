import React, { useState } from 'react';
import './Contacto.css'; 

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = () => {
    console.log('Form data:', nombre, apellido, email, edad);
  };

  return (
    <>
    <h1 className="titulo"> Contacto </h1>

    <div className="contacto-container"> 
      <form>
        <label>
          Nombre:
          <input type="text" className="input-field" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido:
          <input type="text" className="input-field" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Edad:
          <input type="text" className="input-field" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  );
}

export default Contacto;
