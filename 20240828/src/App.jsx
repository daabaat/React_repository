import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import quotes from "./quotes";
import { useState } from "react";
// async function getQuotes() {
//   const response = await fetch(
//     "https://korean-advice-open-api.vercel.app/api/advice"
//   );
//   const data = await response.json();
//   const { author, message } = data;
//   return { author, message };
// }

function App() {
  const [randomQuote, setRandomQuote] = useState(0);

  function PrintRandomQuote() {
    const randomInt = Math.floor(Math.random() * quotes.length);
    setRandomQuote(randomInt);
  }

  return (
    <div>
      <Header />
      <Main {...quotes[randomQuote]} onSelect={PrintRandomQuote} />
    </div>
  );
}

export default App;
