import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      toggleTodo,
      removeTodo,
      filter,
      setFilter
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);
