'use strict';

//Array

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2]; // 더 흔하게 쓰임

// 2. 인덱스를 통한 접근
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); // 마지막 인덱스 위치 가져오기

// 3. 배열에서의 반복문
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. 삽입, 삭제, 복사
// push : 맨 뒤에 넣기
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop : 맨 뒤에서 하나 빼기
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 맨 앞에 넣기
fruits.unshift('strawberry', 'peach');

// shift: 앞에서부터 데이터 빼기
fruits.shift();
fruits.shift();
console.log(fruits);

// 주목: shift와 unshift는 push와 pop보다 느림
// 앞에 넣고 빼는 것은 element들이 추가되고 삭제되는 수만큼 이동해야하기 때문

// splice: 아이템을 인덱스 위치를 이용해 삭제하는 것
fruits.push('strawberry', 'orange', 'lemon');
console.log(fruits);
fruits.splice(1); // default는 지정한 인덱스부터 전부 다 지워버림
console.log(fruits);
fruits.splice(1, 2); // 어디서부터 몇 개를 지울 것인가?
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon'); // 지우고 넣는 것도 가능
console.log(fruits);

// 두 가지 배열 묶기
const fruits2 = ['pear', 'melon'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. 검색
// 인덱스 찾기
console.log(clear);
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('melon')); // 없으면 -1

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('melon')); // 없으면 false

// lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple')); // 처음으로 만난 것
console.log(fruits.lastIndexOf('apple')); // 마지막으로 만난 것
