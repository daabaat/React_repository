import Student from "./Student/Student";
import students from "../../students";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-content">
      <section id="home" className="section home">
        <h2>학생성적을 관리하세요</h2>
        <p>아래 학생들의 성적을 확인할 수 있습니다.</p>
      </section>
      <section id="students" className="section students">
        <h2>학생 성적 리스트</h2>
        <div className="student-list">
          <Student {...students[0]}>
            <h3>{students[0].name}</h3>
          </Student>
          <Student {...students[1]}>
            <h3>{students[1].name}</h3>
          </Student>
          <Student {...students[2]}>
            <h3>{students[2].name}</h3>
          </Student>
          <Student {...students[3]}>
            <h3>{students[3].name}</h3>
          </Student>
          <Student {...students[4]}>
            <h3>{students[4].name}</h3>
          </Student>
        </div>
      </section>
    </main>
  );
}
