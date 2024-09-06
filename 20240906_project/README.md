# Review 작성 사이트

## 주요 기능

1. `리뷰작성` 버튼을 누르면 리뷰를 작성할 수 있는 box가 생기고 `창닫기` 버튼을 누르면 리뷰작성 box가 사라짐

2. 리뷰작성 시 제목, 내용을 작성할 수 있으며 제목, 내용중 하나라도 공백으로 이루어 져 있다면 작성 불가

3. 작성된 리뷰는 제목만 보이고, `내용보기` 버튼을 누를 시 내용이 나오고, `내용 숨기기` 버튼을 누를 시 내용이 다시 숨겨짐.

## 문제 해결

1. ReviewForm.jsx 에서 제목과 내용을 따로 배열로 만들어 관리 했을 때,
   ReviewList.jsx에서 가독성이 떨어지고 제목은 제목대로, 내용은 내용대로 따로 출력되는 문제

###### 해결방법

제목과 내용을 하나의 객체로 만들어서 관리.

```jsx
setContents((prev) => [...prev, title]);
setContentsText((prev) => [...prev, text]);
```

이렇게 받아오던 것을

```jsx
setContents((prev) => [...prev, { title, text }]);
```

이런 식으로 하나의 객체로 관리한다.

2. 내용보기, 내용숨기기 버튼을 눌렀을 때 모든 리뷰의 내용이 보여지고 숨겨지는 문제

###### 해결방법

useState 함수를 이용한 activeIndex 를 이용하여 리뷰 각각의 인덱스를 상태로 관리하여, 버튼을 누를 때 마다 activeIndex 와 index 값을 비교하여 클릭된 항목만 내용이 보이거나 숨기도록 수정함.

```jsx
const [activeIndex, setActiveIndex] = useState(null);
// activeIndex 의 초기값은 null

return (
  <ul className="contents">
    {contents.map((content, index) => (
      <li key={index} className="review-item">
        <div className="contents-title">
          {content.title}
          <button
            onClick={() => {
              setActiveIndex(activeIndex === index ? null : index);
            }}
          >
            {/*activeindex 가 index랑 같을때만 null로 처리*/}

            {activeIndex === index ? "내용 숨기기" : "내용 보기"}
          </button>
        </div>
        {/* activeIndex가 null 일때는 숨기고, activeIndex와 현재 index가 같으면 내용을 보여줌 */}
        <div
          className={
            activeIndex === index ? "contents-text-block" : "contents-text"
          }
        >
          {/* contents-text-block은 보여주는 속성, contents-text는 숨기는 속성임*/}
          {content.text}
        </div>
      </li>
    ))}
  </ul>
);
```
