import { useState, useEffect } from "react";
import Error from "./Error.jsx";

function Forumlario({
  setPacientes,
  pacientes,
  paciente,
  setPaciente,
  error,
  setError,
}) {

  const [pacienteActual, setPacienteActual] = useState(null);

  useEffect(() => {
    if (paciente) {
      setPacienteActual({
        ...paciente,
      });
    }
  }, [paciente]);

  const handleChange = (e) => {
    setPacienteActual({
      ...pacienteActual,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {nombre,propietario,email,alta,sintomas}=pacienteActual
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    const pacienteObjeto = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: getId(),
    };

    if (paciente) {
      const pacientesActualizados = pacientes.map((p) =>
        p.id === paciente.id ? pacienteObjeto : p
      );
      setPacientes(pacientesActualizados);
      setPaciente(null);
    } else {
      pacienteObjeto.id = getId();
      setPacientes([...pacientes, pacienteObjeto]);
    }

    setError(false);

    setPacienteActual(null);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>Todos los campos son requeridos</Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="nombre"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pacienteActual?.nombre ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pacienteActual?.propietario??""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pacienteActual?.email??""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            name="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pacienteActual?.alta??""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={pacienteActual?.sintomas??""}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between w-full">
          {paciente && (
            <button
              className="bg-red-600 p-3 w-2/5 mr-5 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors rounded-lg"
              onClick={() => {
                setPaciente(null);
                setPacienteActual(null);
              }}
            >
              Cancelar
            </button>
          )}
          <input
            type="submit"
            className="bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
            value={`${paciente ? "Editar" : "Añadir"} paciente`}
          />
        </div>
      </form>
    </div>
  );
}

export default Forumlario;

function getId() {
  return Date.now() + Math.random().toString(26).substring(2);
}
