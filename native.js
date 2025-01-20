const members = [
  {name: 'Aman Makhija', age: 20},
  {name: 'Suresh Jsharma', age: 40},
  {name: 'Vijay Sahu', age: 41},
  {name: 'Rakesh Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];



//1. Get array of first names of everyone
//const firstName = members.map((member) => member.name?.split(' ')[0])
//console.log(firstName);


//2. Make everyone's last names in UPPERCASE in given array of objects
// const lastName = members.map((member) => {
//   last = member.name.split(' ')[1].toUpperCase();
//   first = member.name.split(' ')[0]
//   member.name = first + " " + last
// })
// console.log(members);


//3. Get entries where age is between 41-60
const ageLimitSave = [];
const agelimit = members.map((member) => {
  if(member.age>=41 && member.age<60) {
    ageLimitSave.push(member);
    return member;
  }
})
console.log(agelimit);
console.log(ageLimitSave);
 




// 4.  Get average age
// const ageMember = members.filter((member) => member.age !== undefined  );
// const totalAge = ageMember.reduce((acc,x) => acc + x.age, 0 )
// const averageAge = totalAge/ageMember.length;
// console.log(totalAge);
// console.log(averageAge);



// 5. Get Person with maximum age

// let max = 0;
// for(let i=0; i < members.length ; i++) {
//   if(members[i].age > max) {
//     max = members[i].age;
//   }
// }

//const max = Math.max(...members.map(member => member.age));

// console.log(max);





//
//  6. old, noage, young
const noage = _.filter(members, member => member.age === undefined);
const young = _.filter(members, member => member.age <35);
const old = _.filter(members, member => member.age >= 35);

const newMembers = {
  'noage': noage,
  'young': young,
  'old': old
};


//7. add a new member to same members array instance at index 2
// const element = {name: "Nitesh Sharma",age: 22};
// members.splice(2, 0, element);
// console.log(members);


//8. extract first and second element using destructing
// const [firstPerson, secondPerson] = members;
// console.log(firstPerson);
// console.log(secondPerson);



// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
// const newMember = members;
// const oneMember = {name: 'Ram', age: 25}
// newMember.splice(0, 0, oneMember);
// console.log(newMember);




// 10. Extract properties of object using destructuring
// const [{name}, {age}] = members;
// console.log("name  ", name);
// console.log("age   ", age);




// 11. Rename extracted property of object while destructing
// const [{name:username}, {age:Age}] =members
// console.log(username);
// console.log(Age);




// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
// const newObj = {
//   name: 'Aman Makhija', 
//   age: 20,
//   role: "teacher",
//   email: "aman@gmail.com"
// }


// const {name, ...restProperties } = newObj;
// console.log(name);
// console.log(restProperties);



// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
// const new2Obj = {...newObj, age:45};
// console.log(new2Obj);



//  Use reduce function on array and object

// const arr = [2, 5, 4, 8, 6, 12];
// const sum = arr.reduce((acc, x) => acc+ x, 0);
// console.log(sum);



// const new2Members = [
//   {name: 'Aman Makhija', age: 20},
//   {name: 'Suresh Jsharma', age: 40},
//   {name: 'Vijay Sahu', age: 41},
//   {name: 'Rakesh Srivastava', age: 17},
//   {name: 'Swpril Ahuja', age: 45},
//   {name: 'Yogesh Khatri', age: 51}
// ];

// const agesum = new2Members.reduce((acc, x) => acc + x.age, 0)
// console.log(agesum);