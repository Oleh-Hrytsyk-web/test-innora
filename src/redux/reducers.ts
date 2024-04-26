import { Todo, Todos } from "../types";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  TodoActionTypes,
} from "./actions";

const initialState: Todos = {
  todos: [],
};

const rootReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload ? { ...todo, deleted: true } : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
