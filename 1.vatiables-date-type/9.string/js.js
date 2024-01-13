let x;
const name = 'John';
const age = 31;

// nối
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
x = `Hello, my name is ${name} and I am ${age} years old`;


const s = new String('Hello World');
x = typeof s;
x = s.length;

// chữ hoa , chư thường
x = s.toUpperCase();
x = s.toLowerCase();

// lấy ký tự đầu
x = s.charAt(0);

// chữ cái đứng thứ bn
x = s.indexOf('d');

// lấy phần tử 2 đến 5
x = s.substring(2, 5);
x = s.substring(7);
// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);
// xóa khoảng trắng
x = '         Hello World';
x = x.trim();
// thay thế
x = s.replace('World', 'John');
// trả về true nếu tìm thấy
x = s.includes('Hell');
// trả về như cũ
x = s.valueOf();
//trả về chuỗi
x = s.split('');

console.log(x);