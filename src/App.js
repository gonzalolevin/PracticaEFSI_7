import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Estadisticas from "./Estadisticas";
import Contactos from "./Contactos.js";
import Home from "./Home.js";
import Persona from "./Persona.js";
import { useState } from "react";
import { MyContext } from "../../ContextState.js";



const App = () => {
  const [persoans,SetPersonas] = useState([]);
  return (
    <div>
      <MyContext.Provider value ={{personas,SetPersonas}}>
        <BrowserRouter>
          <Layout> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contactos" element={<Contactos />} />
              <Route path="/Estadisticas" element={<Estadisticas />} />
              <Route path="/persona/:id" element={<Persona />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
};

export default App;
