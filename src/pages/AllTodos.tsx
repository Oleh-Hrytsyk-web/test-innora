import { useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Todo, Todos } from "../types";

function AllTodos() {
  const notDeletedTodos = useSelector((state: Todos) =>
    state.todos.filter((i: Todo) => !i.deleted)
  );

  return (
    <div>
      <TodoForm />
      <TodoList todos={notDeletedTodos} />
    </div>
  );
}

export default AllTodos;
