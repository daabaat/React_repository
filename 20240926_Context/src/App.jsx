import "./App.css";
import CounterComponent from "./components/CounterComponent";
import { CounterProvider } from "./provider/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
}

export default App;
