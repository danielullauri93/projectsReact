import { createContext, useReducer } from 'react';
import appReducer from '../reducer/AppReducer';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'some description',
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'another description',
      completed: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

// Proveedor del contexto
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {...task, id: v4()},
    });
    // dispatch es lo que va a modificar el estado
    // type es lo que se dice que accion quiero realizar
    // payload es lo que quiero enviar al reducer, puede ser un objeto con datos o solo un valor
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
