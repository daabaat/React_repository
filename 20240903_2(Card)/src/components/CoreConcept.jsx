// CoreConcept.jsx
import Card from "./Card";
import CARD_DATA from "../CARD_DATA";

export default function CoreConcept() {
  return (
    <section className="card-container">
      {CARD_DATA.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </section>
  );
}
