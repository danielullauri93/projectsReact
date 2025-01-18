export default function appReducer(state, action) {
  // state en que estado esta actualmente que datos tiene actualmente la aplicacion,
  // action es que datos quiero actualizar
  console.log(state, action);

  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':

    console.log(state)
    console.log(action.payload)
      return { tasks: [] };
    default:
      return state;
  }
}
