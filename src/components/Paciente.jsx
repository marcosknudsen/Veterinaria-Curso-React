const Paciente = ({ paciente, setPaciente, eliminarPaciente, setError }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white  py-2 px-10 rounded-lg uppercase"
          type="button"
          onClick={() => {
            setPaciente(paciente);
            setError(false);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white  py-2 px-10 rounded-lg uppercase"
          type="button"
          onClick={() => {
            eliminarPaciente(paciente.id);
            setError(false);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
