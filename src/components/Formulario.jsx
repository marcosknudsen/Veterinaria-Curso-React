import { useState, useEffect } from "react";
import Error from "./Error.jsx";

function Forumlario({ setPacientes, pacientes, paciente, setPaciente,error,setError}) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (paciente) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
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
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div className="flex justify-between w-full">
          {paciente && (
            <button
              className="bg-red-600 p-3 w-2/5 mr-5 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors rounded-lg"
              onClick={() => {
                setPaciente(null);
                setNombre("");
                setPropietario("");
                setEmail("");
                setAlta("");
                setSintomas("");
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
