// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) : mmutable
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!) 선언 없이 사용 가능
// var hoisting (move declaration from bottom to top)
// hoisting : 선언 위치에 상관없이 가장 위로 선언을 끌어 올려주는 것
// has no block scope : 블록이 먹히지 않음 아무 곳에서나 접근 가능
age = 4;
console.log(age);
var age;

// 3. Constant, r(read only) : 값 할당 후 변경 불가
// use const whenever possible.
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security : 코드 삽입 불가
// - thread safety : 프로세스할 당 후 여러 쓰레드가 돌아가면서 동시에 변수에 접근 가능하나 이것이 불가능
// - reduce human mistakes

// 4. Variable types - 타입은 동적으로 결정됨
// primitive, single item: number, string, boolean, null, undefined, symbol - 더 이상 작은 단위로 나뉘어질 수 없음
// -값 자체가 메모리에 저장됨
// object, box container - single 여러 개를 묶어 관리 가능
// object를 가리키는 레퍼런스가 메모리에 저장되고 레퍼런스가 실제 값이 담겨진 곳을 가리킴
// function, first-class function - function도 변수로 사용 가능

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; // positive / 0
const negativeInfinity = -1 / 0; // negative / 0
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) : 최근에 추가된 더 큰 범위의 숫자
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 값이 비어있다고 명시하는 것. null로 값이 할당된 것
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 값이 아예 할당되지 않음
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요하거나 동시다발적으로 실행될 수 있는 코드에서 사용됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description을 이용해 string으로 변환한 뒤 출력해야 함

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; // ellie는 const지만 name과 age는 const가 아니어서 값 변경 가능

// 5. Dynamic typing: dynamically typed language
// static: 변수 선언 시 타입을 명시 해야 함
// dynamic: runtime 시 할당된 값에 따라 타입이 정해짐
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); //숫자로 바꾸어서 에러 발생
