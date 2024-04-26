import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import styles from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types";
import Button from "../Button";

const TodoForm = () => {
  const uuid = uuidv4();
  const [todo, setTodo] = useState<Todo>({
    id: "",
    description: "",
    completed: false,
  });
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({ ...todo, description: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value, id: uuid })
        }
      />
      <Button
        disabled={!todo.description}
        type="submit"
        text="Add Todo"
      />
    </form>
  );
};

export default TodoForm;
