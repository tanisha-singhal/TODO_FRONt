import React from "react";
import classes from "./TodoList.module.css";
import Delete from "@material-ui/icons/Delete";

function TodoList(props) {
  console.log(props.todos);
  return (
    <div className={classes.body}>
      <ul>
        {props.todos.map((todo) => (
          <span key={todo._id} className={classes.line}>
            <li
              style={{ textDecoration: todo.checked ? "line-through" : "none" }}
              className={classes.item}
              onClick={() => props.onCheck(todo._id)}
            >
              {todo.value}
            </li>
            <Delete onClick={() => props.onDelete(todo._id)} />
          </span>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
