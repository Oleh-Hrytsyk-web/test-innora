import { useSelector } from "react-redux";
import { Todo, Todos } from "../types";
import TodoList from "../components/TodoList";
import Button from "../components/Button";

function DeletedTodos() {
    const deletedTodos = useSelector((state: Todos) =>
      state.todos.filter((i: Todo) => i.deleted)
    );
  
    return (
      <div className="deletedTodosPage">
        <div>To Add todo <Button isLink={true} path="/allTodos" text="Back to All Todos Page"/></div>
        <TodoList todos={deletedTodos} />
      </div>
    );
  }
  
  export default DeletedTodos;
  