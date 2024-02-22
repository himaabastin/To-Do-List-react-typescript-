import { MdDelete, MdDone, MdEdit } from "react-icons/md";
import { Todos } from "../Model/Model";
import "./todoList.css";
import { useEffect, useRef, useState } from "react";
interface Props {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);
  const onDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, todo: editValue } : todo
      )
    );
    setOnEdit(!onEdit);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [onEdit]);
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo._id)}>
      <div className="todos__single-text">
        {onEdit ? (
          <input
            ref={inputRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="todos__input"
          />
        ) : todo.isCompleted ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <span>
          <span
            className="todos__icon"
            onClick={() => {
              if (!todo.isCompleted) {
                setOnEdit(!onEdit);
              }
            }}
          >
            <MdEdit />
          </span>
          <span className="todos__icon" onClick={() => onDelete(todo._id)}>
            <MdDelete />
          </span>
          <span className="todos__icon" onClick={() => onDone(todo._id)}>
            <MdDone />
          </span>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
