let x;
const num = new Number(5);

// chuooix so 5
x = num.toString();
// chieu dai 1
x = num.toString().length;

// 5.00
x = num.toPrecision(3);


x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

x = Number.MAX_VALUE; //lon nhat
x = Number.MIN_VALUE; //nho nhat

console.log(x);
