import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [category, setCategory] = useState("trending");
  const [showWrite, setShowWrite] = useState(false);

  return (
    <div className="wrapper">
      <Header
        category={category}
        setCategory={setCategory}
        showWrite={showWrite}
        setShowWrite={setShowWrite}
      />
      <Main
        category={category}
        showWrite={showWrite}
        setShowWrite={setShowWrite}
      />
    </div>
  );
}

export default App;
