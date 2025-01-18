import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function TaskList() {
  const { tasks, deleteTask, toogleTaskDone } = useContext(GlobalContext);

  return (
    <div className='flex justify-center'>
      {/* <button
        className="text-indigo-500"
        type="button"
        onClick={() => deleteTask()}
      >
        Delete Tasks
      </button> */}
      <div className='flex flex-col gap-4 w-auto font-mono'>
        {tasks.map((task) => (
          <div
            key={task.id}
            className='bg-indigo-900 px-10 py-2 text-white shadow-2xl flex justify-between gap-10 rounded-sm'
          >
            <div className="flex flex-col gap-2">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              {/* <h6>{task.id}</h6> */}
              <button
                className={`py-0 px-1 mt-1 rounded-sm ${
                  task.done
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-green-600 hover:bg-green-500"
                }`}
                onClick={() => toogleTaskDone(task.id)}
              >
                {task.done ? "Undone" : "Done"}
              </button>
            </div>
            <div>
              <Link to={`/edit/${task.id}`}>
                <button
                  className='
                  bg-indigo-500
                  hover:bg-indigo-700
                  py-2
                  px-4
                  mr-2
                  rounded-sm'
                >
                  Edit
                </button>
              </Link>
              <button
                className='bg-red-600 hover:bg-red-800 py-2 px-4 mr-2 rounded-sm'
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
