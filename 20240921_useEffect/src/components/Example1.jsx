import { useEffect } from "react";

const Example1 = () => {
  useEffect(() => {
    console.log("Example 1: 컴포넌트가 처음 렌더링될 때 실행됨");

    return () => {
      console.log("Example 1: 컴포넌트가 언마운트될 때 실행됨");
    };
  }, []);

  return <div>Example 1: 처음 렌더링 시 콘솔 확인</div>;
};

export default Example1;
