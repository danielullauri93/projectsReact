export default function appReducer(state, action) {
  // state en que estado esta actualmente que datos tiene actualmente la aplicacion,
  // action es que datos quiero actualizar
  // console.log(state, action);

  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      console.log(state);
      console.log(action.payload);
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload), // cuando se pasa el id de la tarea a eliminar se filtra y se elimina porque la operador !== es para que no sea igual, si fuera igual === no se eliminaria si no que solo apareceria el id de la tarea que se selecciono
      };
    case "UPDATE_TASK":
    console.log(action.payload);  

    const updatedTask = action.payload;
    const updatedTasks = state.tasks.map((task) => {
      if (task.id === updatedTask.id) {
        task.title = updatedTask.title;
        task.description = updatedTask.description;
      }
      return task;
    });
    return {
        tasks: updatedTasks
      };

    case "TOGGLE_TASK_DONE":
      return {
        tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, done: !task.done } : task),
      };
    default:
      return state;
  }
}
