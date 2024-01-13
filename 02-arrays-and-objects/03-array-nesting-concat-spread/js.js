let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays

// tao mang ben trong mang
fruits.push(berries);
x = fruits[3][1];

//tao mot bien moi vaf long car 2 mang
const allFruits = [fruits, berries];

x = allFruits[1][2];

//moi mang laij vs nhau
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// lamf phawng mootj mangr
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// kiem tra xem co phai mang khong
x = Array.isArray(fruits);

// tao mot mang nhu trong
x = Array.from('12345');

console.log(x);