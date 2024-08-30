import "./ProfileCard.css";

export default function ProfileCard({ avatarUrl, name, age, email, children }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt="img" className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">Age:{age}</p>
      <p className="profile-email">Email: {email}</p>
      <ul className="profile-card-children">{children}</ul>
    </div>
  );
}
