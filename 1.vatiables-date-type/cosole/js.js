//hiện số trên bảng
console.log(100);
// hiện chữ
console.log('hoàng minh thiện');

// nhiều giá trị
console.log(20, 'thiện', true);

//in ra màn hình biến x
const x =100;
console.log(x);

// hiện thông báo lỗi | cảnh báo
console.error('Alert');
console.warn('warning');

// hiện ra 1 bảng có tên và email
console.table({name: 'thien', email: 'thienhmph39533@fpt.edu.vn'});


// tao ra 1 nhom
console.group('thien');
console.log(x);
console.error('bao loi');
console.warn('canhr bao');
console.groupEnd();

// them css
const styles = 'padding: 10px; background-color: blue; color: green';
console.log('%cxin chao', styles);