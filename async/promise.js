'use strict';

// Promise
// 비동기를 간편하게 처리할 수 있도록 도와주는 Object
// 정상적으로 수행되면 성공했다는 메시지와 처리된 결과값 전달
// 실패하면 에러를 전달

// Promise는 비동기 수행을 위한 JS Object
// - state(상태) 수행 중인지 / 기능 완료 후 성공했는지 실패했는지
// - 정보 제공자 producer와 정보 소비자 consumer의 차이점 알기
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 프로미스가 만들어지는 순간 executor함수가 자동으로 실행됨
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 여기서의 value는 promise가 정상적으로 실행되어 마지막으로 resolve에서 전달된 값
promise
  .then((value) => {
    console.log(value);
  })
  // chaining : then이 promise를 반환하므로 catch로 바로 이어서 사용 가능
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공과 실패에 상관없이 실행됨
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // 한 가지만 받아서 바로 전달
  .catch((error) => {
    return '🍞';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
