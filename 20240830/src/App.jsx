import userData from "./userData";
import ProfileCard from "./Components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard {...userData[0]}>
        <li>{userData[0].hobbies[0]}</li>
      </ProfileCard>
      <ProfileCard {...userData[1]}>
        <li>{userData[1].hobbies[0]}</li>
        <li>{userData[1].hobbies[1]}</li>
      </ProfileCard>
      <ProfileCard {...userData[2]}>
        <li>{userData[2].hobbies[0]}</li>
        <li>{userData[2].hobbies[1]}</li>
        <li>{userData[2].hobbies[2]}</li>
      </ProfileCard>
      <ProfileCard {...userData[3]}>
        <li>{userData[3].hobbies[0]}</li>
        <li>{userData[3].hobbies[1]}</li>
        <li>{userData[3].hobbies[2]}</li>
        <li>{userData[3].hobbies[3]}</li>
      </ProfileCard>
      <ProfileCard {...userData[4]}>
        <li>{userData[4].hobbies[0]}</li>
        <li>{userData[4].hobbies[1]}</li>
        <li>{userData[4].hobbies[2]}</li>
        <li>{userData[4].hobbies[3]}</li>
        <li>{userData[4].hobbies[4]}</li>
      </ProfileCard>
    </div>
  );
}

export default App;
