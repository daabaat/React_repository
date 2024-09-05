import NumCount from "./components/NumCount";
import Summary from "./components/Summary";

function App() {
  function random() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <div>
      <p>랜덤난수 : {random()}</p>
      <NumCount />
      <Summary></Summary>
    </div>
  );
}

export default App;
