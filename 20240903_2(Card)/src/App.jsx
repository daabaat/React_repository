import { Fragment } from "react";
import Example from "./components/Example";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="app">
        <h1>React Props 연습</h1>
        <CoreConcept />
        <Example />
      </main>
    </Fragment>
  );
}

export default App;
