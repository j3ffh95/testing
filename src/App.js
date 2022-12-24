import logo from "./logo.svg";
import "./App.css";

function App() {
  const props = {
    id: "input",
    type: "text",
    maxLength: "3",
  };
  return (
    <p
      style={{
        color: "red",
        textAlign: "center",
        fontSize: "5rem",
      }}
    >
      Hola Mundo
    </p>
  );
}

export default App;
