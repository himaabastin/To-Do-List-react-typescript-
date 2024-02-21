import InputField from "./components/InputField/InputField";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="heading">Taskify Me</div>
      <InputField />
    </div>
  );
};

export default App;
