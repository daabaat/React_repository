import "./App.css";

function Todo({ children }) {
  return <li>{children}</li>;
}

function App() {
  const DUMMY_DATA = ["Learn React", "Practice React", "Profit!"];
  return (
    <ul className="app">
      {DUMMY_DATA.map((data, index) => (
        <Todo key={index}>{data}</Todo>
      ))}
    </ul>
  );
}

export default App;
