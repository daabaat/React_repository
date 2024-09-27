import "./App.css";
import Main from "./components/Main";
import { UserProvider } from "./provider/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
