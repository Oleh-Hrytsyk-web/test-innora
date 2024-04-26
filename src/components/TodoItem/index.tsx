import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { deleteTodo, toggleTodo, editTodo } from "../../redux/actions";
import Button from "../Button";
import styles from "./Todo.module.scss";
import { Todo } from "../../types";

const TodoItem = ({ id, description, completed, deleted }: Todo) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  
  const todoItemClass = classNames(
    styles.todoItem,
    completed && styles.todoItemCompleted
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo(id, editedDescription));
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditedDescription(description);
    setEditMode(false);
  };

  return (
    <li className={todoItemClass}>
      {editMode && !deleted ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className={styles.todoItemDescriptionInput}
          />
          <Button onClick={handleSaveEdit} text="Save" />
          <Button onClick={handleCancelEdit} text="Cancel" />
        </>
      ) : (
        <>
          <span
            title={description}
            className={styles.todoItemDescription}
            onClick={handleEdit}
          >
            {description}
          </span>
          {!deleted && (
            <div className={styles.todoItemControllers}>
              <input
                type="checkbox"
                name={description}
                id={id}
                checked={completed}
                onChange={handleToggle}
                className={styles.todoItemCheckbox}
              />
              <Button onClick={handleDelete} text="X" />
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default TodoItem;
