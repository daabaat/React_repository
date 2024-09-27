import { UserContext } from "../provider/UserProvider";
import { useContext } from "react";

export default function User({ user }) {
  const { getPost } = useContext(UserContext);

  return (
    <li
      onClick={() => {
        getPost(user.id);
      }}
    >
      <span>{user.id}</span>
      <span>{user.name}</span>
      {" / "}
      <span>{user.phone}</span>
      {" / "}
      <span>{user.email}</span>
    </li>
  );
}
