import userData from "./userData";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import { useState } from "react";

function App() {
  console.log("zz");
  const [selectedEmail, setSelectedEmail] = useState("");

  function ChangeEmail(email) {
    setSelectedEmail(email);
  }
  // function EmailPrint(email) {
  //   alert(`이메일은 ${email}`);
  // }

  return (
    <div>
      <div className="App">
        {/* <ProfileCard
          {...userData[0]}
          onSelect={() => {
            // EmailPrint(userData[0].email);

            ChangeEmail(userData[0].email);
          }}
        >
          <li>{userData[0].hobbies[0]}</li>
        </ProfileCard>

        <ProfileCard
          {...userData[1]}
          onSelect={() => {
            // EmailPrint(userData[1].email);
            ChangeEmail(userData[1].email);
          }}
        >
          <li>{userData[1].hobbies[0]}</li>
          <li>{userData[1].hobbies[1]}</li>
        </ProfileCard>
        <ProfileCard
          {...userData[2]}
          onSelect={() => {
            // EmailPrint(userData[2].email);
            ChangeEmail(userData[2].email);
          }}
        >
          <li>{userData[2].hobbies[0]}</li>
          <li>{userData[2].hobbies[1]}</li>
          <li>{userData[2].hobbies[2]}</li>
        </ProfileCard>
        <ProfileCard
          {...userData[3]}
          onSelect={() => {
            // EmailPrint(userData[3].email);
            ChangeEmail(userData[3].email);
          }}
        >
          <li>{userData[3].hobbies[0]}</li>
          <li>{userData[3].hobbies[1]}</li>
          <li>{userData[3].hobbies[2]}</li>
          <li>{userData[3].hobbies[3]}</li>
        </ProfileCard>
        <ProfileCard
          {...userData[4]}
          onSelect={() => {
            // EmailPrint(userData[4].email);
            ChangeEmail(userData[4].email);
          }}
        >
          <li>{userData[4].hobbies[0]}</li>
          <li>{userData[4].hobbies[1]}</li>
          <li>{userData[4].hobbies[2]}</li>
          <li>{userData[4].hobbies[3]}</li>
          <li>{userData[4].hobbies[4]}</li>
        </ProfileCard> */}
        {userData.map((user, index) => (
          <ProfileCard
            {...user}
            key={index}
            onSelect={() => {
              ChangeEmail(user.email);
            }}
          >
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ProfileCard>
        ))}
      </div>
      <p>{selectedEmail}</p>
    </div>
  );
}

export default App;
