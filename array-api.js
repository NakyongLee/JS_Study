// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); // 구분자는 ','가 기본값
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2); // limit은 명시할 경우 그 개수만큼만!
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // reverse는 원래 배열도 변화시킴.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //   const result = array.splice(0, 2);
  //   console.log(result); // 1, 2
  //   console.log(array); // 3, 4, 5
  const result = array.slice(2, 5); //2번부터 4번 인덱스까지
  console.log(result);
  console.log(array); //배열은 동일
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find: callback함수가 true를 리턴하면 해당 element를 return하고 바로 끝남
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); // 한 명이라도 있으면 true

  const result2 = students.every((student) => student.score < 50); //모든 학생이 50점 이하
  console.log(result2); // false
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    // return한 값이 prev로 들어감
    console.log('-----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); //initial value 전달

  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
