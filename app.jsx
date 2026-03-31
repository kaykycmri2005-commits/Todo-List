import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

export default function App() {
  return (
    <TodoProvider>
      <h1>Todo Avançado</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </TodoProvider>
  );
}
