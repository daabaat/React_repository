import { createContext, useReducer } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initState = {
    loading: false,
    error: null,
    users: null,
    posts: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };

      case "GETUSER":
        return {
          ...state,
          loading: false,
          users: action.users,
        };

      case "GETPOST":
        return {
          ...state,
          loading: false,
          posts: action.posts,
        };

      case "ERROR":
        return {
          ...state,
          loading: false,
          error: action.error,
        };

      default:
        throw new Error(`액션 오류 ${action.type}`);
    }
  }

  const getUser = async () => {
    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      dispatch({ type: "GETUSER", users });
    } catch (e) {
      dispatch({ type: "ERROR" });
    }
  };

  const getPost = async (userId) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const posts = await response.json();
      dispatch({ type: "GETPOST", posts });
    } catch (e) {
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <UserContext.Provider value={{ state, getUser, getPost }}>
      {children}
    </UserContext.Provider>
  );
}
