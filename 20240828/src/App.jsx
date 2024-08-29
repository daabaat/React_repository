import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import quotes from "./quotes";

// async function getQuotes() {
//   const response = await fetch(
//     "https://korean-advice-open-api.vercel.app/api/advice"
//   );
//   const data = await response.json();
//   const { author, message } = data;
//   return { author, message };
// }

function App() {
  let randomInt = Math.floor(Math.random() * quotes.length);
  return (
    <div>
      <Header />
      <Main {...quotes[randomInt]} />
    </div>
  );
}

export default App;
