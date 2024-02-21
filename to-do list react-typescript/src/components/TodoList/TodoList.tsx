import { Todos } from "../Model/Model";

interface Props {
  todos: Todos[];
}
const TodoList = ({ todos }: Props) => {
  return (
    <div className="">
      {todos?.map((todo) => (
        <li>{todo?.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
