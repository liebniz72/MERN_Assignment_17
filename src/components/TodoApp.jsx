// src/components/TodoApp.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos";
import TodoList from "./TodoList";
import { toast } from "react-hot-toast";

const TodoApp = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.length === 0) {
      toast.error("Please enter a todo item.");
      return;
    }

    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#4CA1F2" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Todo App Redux</h6>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={handleAddTodo}>
                    Add Todo
                  </button>
                </div>

                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoApp;
