import List from "./List/List";
import quotes from "../../quotes";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <ul className="quotes">
        <List authors={quotes[0].authors} />
        <List authors={quotes[1].authors} />
        <List authors={quotes[2].authors} />
      </ul>
    </header>
  );
}
