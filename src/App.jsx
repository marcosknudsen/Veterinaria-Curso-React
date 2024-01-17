import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState(null);
  const [error, setError] = useState(false);

  function eliminarPaciente(id) {
    const respuesta = confirm("Deseas eliminar a este paciente?");
    if (respuesta) setPacientes(pacientes.filter((p) => p.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          error={error}
          setError={setError}
        />
        <ListadoPacientes
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          setError={setError}
        />
      </div>
    </>
  );
}

export default App;
