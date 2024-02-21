import { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, onAddTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        onAddTodo(e);
        inputRef.current?.blur;
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__field"
        placeholder="Enter Tasks"
      />
      <button type="submit" className="input__button">
        Go
      </button>
    </form>
  );
};

export default InputField;
