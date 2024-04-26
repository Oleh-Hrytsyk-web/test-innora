export interface Todos {
 todos: Todo[]
}

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
  deleted?: boolean;
}
