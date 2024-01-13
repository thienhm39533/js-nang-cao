let x;

// tao mot doi tuowng
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// truy ap thuoc tinh cua cac doi tuowng
x = person.name; 
x = person['age']; 
x = person.address.state;
x = person.hobbies[0];

// cap nhta thuoc tinh
person.name = 'Jane Doe';
person['isAdmin'] = false;

//xoas age
delete person.age;

// tao mot thuoc tinh ms
person.hasChildren = true;

const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);