import { Todos } from "../Model/Model";
import SingleTodo from "./SingleTodo";
import "./todoList.css";
interface Props {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo
          key={todo._id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
