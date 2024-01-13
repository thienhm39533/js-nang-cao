// khai baos cacs bieens
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);
age = 31;
console.log(age);

//Với let, có thể khai báo một giá trị mà không cần gán giá trị dó
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);




const arr = [1, 2, 3, 4];
arr.push(5); //thêm só vào cuối hàng
console.log(arr);


// khai báo nhiều giá trị cùng một lúc
let a, b, c; //undefined

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);