let x;

// số + chuỗi
x = 5 + '5';

//số + số
x = 5 + Number('5');

// số * số
x = 5 * '5';


x = 5 + null;//5
x = Number(null);//0
x = Number(true);//1
x = Number(false);//0


console.log(x, typeof x);