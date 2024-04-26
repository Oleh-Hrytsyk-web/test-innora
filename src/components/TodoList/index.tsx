import { useSelector } from "react-redux";
import styles from "./TodoList.module.scss";
import { Todo, Todos } from "../../types";
import TodoItem from "../TodoItem";

const TodoList = ({ todos }: Todos) => {
  return (
    <div className={styles.todoListWrapper}>
      <ul className={styles.todoList}>
        {todos.map((i: Todo) => (
          <TodoItem
            key={i.id}
            id={i.id}
            description={i.description}
            completed={i.completed}
            deleted={i.deleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
