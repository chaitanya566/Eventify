// Actions
export const  ACTIONS = {
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    UPDATE_TASK: "UPDATE_TASK",
}
// Reducer function
export const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTIONS.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        ),
      };
    default:
      return state;
  }
};
