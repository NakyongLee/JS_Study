'use strict';

// JavaScript는 synchronous함
// hoisting 이후 부터는 코드가 순서대로 동기적으로 실행됨
// hoisting : var, function declaration 과 같은 선언들이 자동으로 가장 위로 올라가는 것

// 비동기와 콜백 예시
console.log('1');
// 브라우저 api는 브라우저에게 먼저 요청을 보내고 응답을 기다리지 않고 다음으로 넘어감 1초 후 콜백함수 실행
// 1초가 지난 후에 날 불러줘(call back 함수)
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example와 단점
// 가독성이 떨어짐
// 에러를 발견하거나 디버깅하기 힘듦
// 유지 보수 어려움
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, your role is a ${userWithRole.role}`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
