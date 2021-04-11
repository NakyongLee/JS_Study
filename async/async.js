'use strict';

// async & await
// 프로미스를 좀 더 깔끔하게!(그렇다고 늘 await async를 사용해야하는 것은 아님)

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    //do network request in 10 secs...
    resolve('ellie');
  });
}

const user = fetchUser();
console.log(user);
