/**
 * 1. 명령형 프로그래밍
 * 2. 선언형 프로그래밍
 */

// 명령
const number = [1, 2, 3, 4, 5];
const newNumber = [];
for (i = 0; i < number.length; i++) {
  newNumber.push(number[i]);
}

// 선언형

const number1 = [1, 2, 3, 4, 5];

const newNumber1 = number.map((e) => e);

const card = () => {
  return `<div>
        <img src="http://sdfsdf />
        <p>내용</p>
    </div>`;
};
