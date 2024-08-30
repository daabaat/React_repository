function ProfileCard({ img, name, age, email, children }) {
  return (
    <div className="profile-card">
      <img src={img} alt="img" className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">Age:{age}</p>
      <p className="profile-email">Email: {email}</p>
      <ul className="profile-card-children">{children}</ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ProfileCard
        img="https://randomuser.me/api/portraits/women/8.jpg"
        name="이수민"
        age="28"
        email="suminlee@email.com"
      >
        <li>요리</li>
      </ProfileCard>
      <ProfileCard
        img="https://randomuser.me/api/portraits/men/8.jpg"
        name="김영호"
        age="29"
        email="youngho@email.com"
      >
        <li>영화감상</li>
        <li>자전거 타기</li>
      </ProfileCard>
      <ProfileCard
        img="https://randomuser.me/api/portraits/women/11.jpg"
        name="박지현"
        age="30"
        email="jihyun@email.com"
      >
        <li>음악 감상</li>
        <li>사진 촬영</li>
        <li>독서</li>
      </ProfileCard>
      <ProfileCard
        img="https://randomuser.me/api/portraits/men/13.jpg"
        name="최민수"
        age="31"
        email="minsue@email.com"
      >
        <li>독서</li>
        <li>테니스</li>
        <li>영화 감상</li>
      </ProfileCard>
      <ProfileCard
        img="https://randomuser.me/api/portraits/women/15.jpg"
        name="윤서영"
        age="23"
        email="seoyoung@email.com"
      >
        <li>여행</li>
        <li>캘리그래피</li>
        <li>요가</li>
        <li>베이킹</li>
        <li>사진 촬영</li>
      </ProfileCard>
    </div>
  );
}

export default App;
