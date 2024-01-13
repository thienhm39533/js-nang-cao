let amount = 'hello';

// chuyen chuoi thanh so
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// chuyen so thanh chuoi
amount = amount.toString();
amount = String(amount);

//chuyen chuoi thanh chu so thap phan
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1)); // can bac 2 
console.log(1 + NaN); //NaN
console.log(undefined + undefined);//khong xac dinh
console.log('foo' / 3); //NaN

console.log(amount, typeof amount); //boolean