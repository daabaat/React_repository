import "./ProfileCard.css";

export default function ProfileCard({
  avatarUrl,
  name,
  age,
  email,
  children,
  onSelect,
}) {
  function sendEmail() {
    alert(`${name}님에게 메일을 보냅니다.`);
  }
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt="img" className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">Age:{age}</p>
      <p className="profile-email">Email: {email}</p>
      <ul className="profile-card-children">{children}</ul>
      <button onClick={sendEmail}>메일 보내기</button>
      <button onClick={onSelect}>이메일 확인</button>
    </div>
  );
}
