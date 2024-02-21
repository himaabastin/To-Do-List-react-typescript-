import { useState } from "react";
import InputField from "./components/InputField/InputField";
import "./index.css";
import { Todos } from "./components/Model/Model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const onAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { _id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <div className="heading">Taskify Me</div>
      <InputField todo={todo} setTodo={setTodo} onAddTodo={onAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
