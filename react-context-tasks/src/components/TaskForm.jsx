import { useState, useContext } from 'react';
import { IoIosCreate } from 'react-icons/io';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
  
  const navigate = useNavigate();

  const {addTask} = useContext(GlobalContext)

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
  });

  const handleInputChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
    // con {...Task} crea una copia del objeto Task y luego con [event.target.name]: event.target.value agrega al nuevo objeto el valor del input que se escribe en el name del input -> En otras palabras si 'no' se pone al momento de escribir el titulo y luego pasas a la descripcion se borra lo del titulo.
  };

  // con el event.target.name muestra el titulo del input como el name="title" y name="description"
  // con el event.target.value muestra el valor del input que se escribe a dentro "Task 1" y "another description"
  // si mostramos en consola con console.log(event.target.name, event.target.value) muestra esto title 'lo que escribimos en el input' e igual con description 'lo que escribimos en el input'
  

  const handleSubmit = (event) => {
    event.preventDefault(); // con event.preventDefault() evita que se recargue la página al enviar el formulario
    // console.log(task); // aquí se podría enviar la tarea al back-end o hacer algo con ella
    addTask(task)
    navigate('/'); // con navigate('/') redirecciona a la página principal
  };

  return (
    <div className="flex justify-center items-center h-3/4">
      <form
        action=""
        className="bg-indigo-900 p-6 font-mono rounded-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <h2 className="font-semibold mb-5">Create a task</h2>
        </div>
        <div className="mb-5">
          <label htmlFor="title" className="px-2 text-sm">
            Title:{' '}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
            placeholder="Write a title"
            className=" text-sm py-1 px-4 focus:outline-none focus:text-gray-100 bg-indigo-500 w-full"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="description" className="px-2 text-sm">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="2"
            onChange={handleInputChange}
            placeholder="Write a description"
            className="text-sm py-1 px-2 focus:outline-none focus:text-gray-100 bg-indigo-500 w-full h-20"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white text-sm py-1 px-2 rounded-sm inline-flex items-center gap-2 shadow-lg shadow-indigo-500/50"
          >
            Create Task
            <IoIosCreate />
          </button>
        </div>
      </form>
    </div>
  );
}
