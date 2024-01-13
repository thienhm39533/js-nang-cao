let d;

// lấy ngày, giờ trên mt
d = new Date();

// Set to a string
d = d.toString();

//lấy một ngày bất kỳ
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

d = Date.now();


// tạo ngày 
d = new Date(1666962049745);

// đổi từ miligay sang giây
d = Math.floor(Date.now() / 1000);

console.log(d);