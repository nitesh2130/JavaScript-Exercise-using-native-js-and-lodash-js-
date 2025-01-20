const _ = require("lodash"); 


const members = [
  {name: 'Aman Makhija', age: 20},
  {name: 'Suresh Jsharma', age: 40},
  {name: 'Vijay Sahu', age: 41},
  {name: 'Rakesh Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];

//  1. Get array of first names of everyone

// const firstName = _.map(members, member => member.name.split(' ')[1]);
// console.log(firstName);


// 2. Make everyone's last names in UPPERCASE in given array of objects

// const lastNameUpercase = _.map(members, member => {
//     const [firstName, lastName] = member.name.split(' '); 
//     return lastName ? { ...member, name: `${firstName} ${lastName.toUpperCase()}`}
//     :member; })
// console.log(lastNameUpercase);



//3  Get entries where age is between 41-60

// const ageLimitMember = _.filter(members, member => member.age>=41 && member.age<60 )
// console.log(ageLimitMember);


// 4 Get average age

const getAgeMember = _.filter(members, member => member.age !== undefined); 
const averageAge = _.reduce(getAgeMember, (sum, memberForSum) => sum + memberForSum.age, 0) / getAgeMember.length; 

console.log(averageAge);



// 5 Get Person with maximum age

// const maxAgePerson = _.maxBy(members, 'age');
// console.log(maxAgePerson);

//6 Divide persons in three groups, result should look like
    // {
    //   'young': [],
    //   'old': [],
    //   'noage': []
    // }
    // Less than 35yrs is young, above 35 is old

const newMembers = _.groupBy(members, (member) => {
  if (member.age === undefined) return 'noage';
  if (member.age < 35) return 'young';
  return 'old';
});

console.log(newMembers);

// 7. add a new member to same members array instance at index 2
// const element = {name: "Rohit Sharma", age: 36};
// members.splice(2, 0, element);
// console.log(members);

// 8.  Extract first and second element using destructing
// const [First, Second] = members;
// console.log(First);
// console.log(Second);


// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
// const element = {name: "Nitesh Sharma", age: 22};
// members.splice(0, 0, element);
// console.log(members);

// 10. Extract properties of object using destructuring
// const [{name}, {age}] = members;
// console.log(name);
// console.log(age);

// 11. Rename extracted property of object while destructing
// const [{name:username}, {age:Age}] =members
// console.log(username);
// console.log(Age);

// 12. Destructure any property of an object and use spread operator to get remaining properties in an object.
// const [first, ...rest] = members;
// console.log(first);
// console.log(rest);

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step

// const newMember = [...members, {name: "Nitesh Sharma" , age: 40}]
// console.log(newMember);

// 14. Use reduce function on array and object 
// const agesum = _.sumBy(members, 'age');
// console.log(agesum);

// const arr = [2, 5, 4, 8, 6, 12];
// const sum = _.sum(arr);
// console.log(sum);
