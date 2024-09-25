import { useReducer, useEffect, useState } from "react";
import "./App.css";

const initState = {
  userLoading: false,
  repoLoading: false,
  userError: null,
  repoError: null,
  userData: null,
  repositoryData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        userLoading: true,
        userError: null,
      };
    case "REPO_LOADING":
      return {
        ...state,
        repoLoading: true,
        repoError: null,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        userLoading: false,
        userData: action.userData,
      };
    case "REPO_SUCCESS":
      return {
        ...state,
        repoLoading: false,
        repositoryData: action.repositoryData,
      };
    case "USER_ERROR":
      return {
        ...state,
        userLoading: false,
        userError: action.error,
      };
    case "REPO_ERROR":
      return {
        ...state,
        repoLoading: false,
        repoError: action.error,
      };
    default:
      return state;
  }
}

export default function App() {
  const key = import.meta.env.VITE_GITHUB_TOKEN;
  console.log(key);
  const [buttonText, setButtonText] = useState("저장소 불러오기");
  const [showList, setShowList] = useState(false); // 리스트 표시 여부

  const [state, dispatch] = useReducer(reducer, initState);

  // 첫 번째 API 호출 (유저 정보)
  useEffect(() => {
    async function getGitUser() {
      dispatch({ type: "USER_LOADING" });
      try {
        const response = await fetch("https://api.github.com/users/daabaat", {
          headers: {
            Authorization: `token ${key}`,
            "User-Agent": "git_app",
          },
        });
        const userData = await response.json();
        dispatch({ type: "USER_SUCCESS", userData: userData });
      } catch (e) {
        dispatch({
          type: "USER_ERROR",
          error: `유저 정보 불러오기 실패: ${e.message}`,
        });
      }
    }

    getGitUser();
  }, []);

  async function getGitRepos() {
    dispatch({ type: "REPO_LOADING" });
    try {
      const reposResponse = await fetch(
        "https://api.github.com/users/daabaat/repos?sort=created",
        {
          headers: {
            Authorization: `token ${key}`,
            "User-Agent": "git_app",
          },
        }
      );
      const reposData = await reposResponse.json();
      dispatch({ type: "REPO_SUCCESS", repositoryData: reposData });
    } catch (e) {
      dispatch({
        type: "REPO_ERROR",
        error: `저장소 정보 불러오기 실패: ${e.message}`,
      });
    }
  }

  function toggleRepoList() {
    if (showList) {
      setShowList(false); // 리스트 숨기기
      setButtonText("저장소 불러오기"); // 버튼 텍스트 원래대로
    } else {
      getGitRepos(); // 저장소 불러오기
      setShowList(true); // 리스트 표시
      setButtonText("숨기기"); // 버튼 텍스트 변경
    }
  }

  return (
    <div>
      {/* 유저 정보 로딩, 에러, 데이터 표시 */}
      {state.userLoading && <p>유저 정보 불러오는 중...</p>}
      {state.userError && <p>{state.userError}</p>}
      {!state.userLoading && !state.userError && state.userData && (
        <>
          <p>이름 : {state.userData.login}</p>
          <img src={state.userData.avatar_url} alt="사진" />
          <p>팔로워 수 : {state.userData.followers} 명</p>
          <p>팔로잉 수 : {state.userData.following} 명</p>
        </>
      )}

      {/* 저장소 정보 버튼: 클릭 시 버튼 텍스트 변경 */}
      <button onClick={toggleRepoList}>{buttonText}</button>

      {/* 저장소 정보 로딩, 에러, 데이터 표시 */}
      {state.repoLoading && <p>저장소 정보 불러오는 중...</p>}
      {state.repoError && <p>{state.repoError}</p>}

      {/* 저장소 리스트: showList가 true일 때만 리스트를 표시 */}
      {showList &&
        !state.repoLoading &&
        !state.repoError &&
        state.repositoryData && (
          <>
            <h3>저장소 목록:</h3>
            <ul>
              {state.repositoryData.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url}>{repo.name}</a>
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}
