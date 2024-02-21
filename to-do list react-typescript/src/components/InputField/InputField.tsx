import "./InputField.css";
const InputField = () => {
  return (
    <div className="input">
      <input type="text" className="input__field" placeholder="Enter Tasks" />
      <button type="submit" className="input__button">
        Go
      </button>
    </div>
  );
};

export default InputField;
