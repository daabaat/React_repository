import User from "./User";
import { useContext, useEffect } from "react";
import { UserContext } from "../provider/UserProvider";
import Post from "./Post";

export default function Main() {
  const { state, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {state.loading && <p>로딩중...</p>}
      {state.error && <p>에러 발생</p>}
      {!state.loading && state.users && !state.posts && (
        <ul style={{ listStyle: "none" }}>
          {state.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}
      {!state.loading && state.posts && (
        <ul style={{ listStyle: "none" }}>
          {state.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
}
