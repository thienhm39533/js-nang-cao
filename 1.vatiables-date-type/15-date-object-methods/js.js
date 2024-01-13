let x;
let d = new Date();

// Date methods

x = d.toString();

 x = d.getTime();
 x = d.valueOf();

 x = d.getFullYear();//nam

 x = d.getMonth(); //tháng
 x = d.getMonth() + 1; //tháng +1
 x = d.getDate();//ngay

 x = d.getDay();//thứ
 x = d.getHours();//giờ

 x = d.getMinutes(); //phút

 x = d.getSeconds(); //giây
 x = d.getMilliseconds();

 x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;//năm tháng ngày
 // dặt date theo ngôn ngữ
 x = Intl.DateTimeFormat('en-US').format(d);
 x = Intl.DateTimeFormat('vi-VN').format(d);
 
 x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);


 x = d.toLocaleString('default', {
   weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  minute: 'numeric',
   second: 'numeric',
   timeZone: 'America/New_York',
 });

console.log(x);