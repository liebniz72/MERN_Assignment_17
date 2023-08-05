/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todos";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={`list-group-item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
        className="form-check-input me-2"
      />
      {text}
      <button
        onClick={handleDelete}
        className="btn btn-danger btn-sm float-end"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
