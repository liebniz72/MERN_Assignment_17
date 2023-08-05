// src/redux/store.js
import { createStore } from "redux";
import todosReducer from "./todos";

const store = createStore(todosReducer);

export default store;
