import "./Student.css";

export default function Student({ children, score, profile }) {
  return (
    <div className="student">
      <img src={profile} alt="없음" />
      {children}
      <p>{score}</p>
    </div>
  );
}
