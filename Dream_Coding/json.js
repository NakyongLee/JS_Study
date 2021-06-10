'use strict';

// JSON
// 데이터를 주고 받기 위한 가장 간단한 포맷
// 가벼운 텍스트 기반의 구조
// 읽기 편함
// key-value
// serialization 혹은 네트워크 간 연결에서 데이터 전송을 위해서 쓰인다
// 프로그래밍 언어나 플랫폼 상관없이 사용 가능

// Oject를 어떻게 serialization? string은 어떻게 deserialization?

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabiit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); //함수는 데이터가 아니므로 json에 포함되지 않음

json = JSON.stringify(rabbit, ['name']); //원하는 프로퍼티만 고르기
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabiit.jump();
// obj.jump(); //jump라는 api없음

console.log(rabbit.birthDate.getDate()); // Date객체이므로 가능
console.log(obj.birthDate.getDate());

// const obj = JSON.parse(json);
// console.log(obj.birthDate.getDate()); // String이 되어 불가능
