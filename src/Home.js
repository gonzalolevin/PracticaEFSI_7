import React from 'react';
import './App.css';
import Personas from './Personas.json';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Directorio de personas</h1>
      <ul className="list-unstyled">
        {Personas.map((persona) => (
          <Link to={`/persona/${persona.id}`} className="link" key={persona.id}>
            <li className="list-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2>{persona.nombre} {persona.apellido}</h2>
                </div>
                <div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
