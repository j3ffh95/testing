import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <SayHello />
    </div>
  );
}

function SayHello() {
  const name = "Bruce";
  const error = true;
  return (
    <>
      <h1>Hola {error ? "error" : "success"}</h1>
      <p>como estan</p>
    </>
  );
}

export default App;
