let x;

const arr = [33, 44, 66, 78, 234];

//them mot so vao cuoi mang
arr.push(100);

// bo gia tri cuoi mnag
arr.pop();

// them gia tri vao dau mang
arr.unshift(10);

// xoa gia tri dau tien
arr.shift();

// dao nguoc mang
arr.reverse();
// console.log(arr);

//kiem tra xem cos trong mng ko
x = arr.includes(445);

x = arr.indexOf(28);

//lay phan tu tu muc dau tien den cuoi cung
x = arr.slice(1, 4);

//
x = arr.splice(1, 4);


console.log(x);