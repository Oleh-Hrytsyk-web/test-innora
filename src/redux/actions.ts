import { Todo } from "../types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: { id: string; description: string };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: string;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | EditTodoAction
  | ToggleTodoAction;

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId: string) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const editTodo = (id: string, description: string) => ({
  type: EDIT_TODO,
  payload: { id, description },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});
