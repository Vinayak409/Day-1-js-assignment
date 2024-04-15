/*
const members = [
  {name: 'Rakesh Gupta', age: 20},
  {name: 'Suresh Jangid', age: 40},
  {name: 'Tabish Khan', age: 41},
  {name: 'Rakesh Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];
1. Get array of first names of everyone
2. Make everyone's last names in UPPERCASE in given array of objects
3. Get entries where age is between 41-60
4. Get average age
5. Get Person with maximum age
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
7. add a new member to same members array instance at index 2
8. extract first and second element using destructing
9. Create a new array instance adding a new member at index 0,
   and keeping existing afterwards
10. Extract properties of object using destructuring
11. Rename extracted property of object while destructing
12. Destructure any property of an object and use spread operator
    to get remaining properties in an object
13. Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step
14. Use reduce function on array and object
*/

const lodash = require("lodash");

const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Suresh Jangid", age: 40 },
  { name: "Tabish Khan", age: 41 },
  { name: "Rakesh Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone

// const names = lodash.map(members, "name");
// console.log(names);

// 2. Make everyone's last names in UPPERCASE in given array of objects

// const updatedMembers = lodash.map(members, (member) => {
//   let memberName = member.name;
//   let nameArr = memberName.split(" ");
//   let lastname = lodash.last(nameArr);
//   let firstname = lodash.initial(nameArr).join(" ");

//   let uppercaseLastname = lodash.toUpper(lastname);

//   return {
//     name: firstname + " " + uppercaseLastname,
//     age: member.age,
//   };
// });

// console.log(updatedMembers);

//   3. Get entries where age is between 41-60
// let result = [];
// lodash.forEach(members, (member) => {
//   let memberAge = member.age;
//   memberAge >= 41 && memberAge <= 60 ? result.push(memberAge) : null;
// });
// console.log(result);

// 4. Get average age
// let size = 0;
// let sum = 0;

// lodash.map(members, (member) => {
//   if (member.age != undefined) {
//     sum += member.age;
//     size++;
//   }
// });

// let ans = sum / size;
// console.log(ans);

// 5. Get Person with maximum age
// let arr = []
// lodash.map(members, (member) => {
//     arr.push(member.age)
// })
// console.log(lodash.max(arr));

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

// let result = {
//   young: [],
//   old: [],
//   noage: [],
// };

// lodash.forEach(members, (member) => {
//   if (member.age < 35) {
//     result.young.push(member.name);
//   } else if (member.age > 35) {
//     result.old.push(member.name);
//   } else {
//     result.noage.push(member.name);
//   }
// });

// console.log(result);

// 7. add a new member to same members array instance at index 2

// const index = 2;

// const newObj = {
//   name: "Manoj kumar sharma",
//   age: 42,
// };

// function insert(members, index, newObj){
//     return [...lodash.slice(members, 0, index), newObj, ...lodash.slice(members, index)]

// }

// const newMembers = insert(members, index, newObj)
// console.log(newMembers);

// 8. extract first and second element using destructing

// lodash.forEach(members, (member) => {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// });

//   9. Create a new array instance adding a new member at index 0,
//      and keeping existing afterwards

// let newMembers = [];
// newMembers.push({
//   name: "Ramswaroop sharma",
//   age: 50,
// });

// lodash.forEach(members, (member)=>{
//     newMembers.push(member)
// })

// console.log(newMembers);

// 10. Extract properties of object using destructuring
// lodash.forEach(members, (member) => {
//   const { name, age } = member;
//   console.log(name);
//   console.log(age);
// });

//   11. Rename extracted property of object while destructing

// lodash.forEach(members, (member) => {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// });

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

// lodash.forEach(members, (member) => {
//   const { name: memberName, ...rest } = member;
//   console.log(memberName);
//   console.log(rest);
// });

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

// const { name: memberName, ...restProp } = members[2];
// restProp.age = 50;
// console.log(restProp);

// 14. Use reduce function on array and object

// reduce on array
// const arr = [1, 2, 3, 4, 5];
// const ans = lodash.reduce(arr, (acc, curr) => acc + curr, 0);
// console.log(ans);

// reduce on object
//   const data = {
//       a : 1,
//       b : 2,
//       c : 1,
//       d : 2,
//       e : 1
//   }

//   const ans = lodash.reduce(data, (result, value, key)=>{
//     (result[value] || (result[value] = [])).push(key);
//     return result;
//   }, {})

//   console.log(ans);

//   const result = Object.values(data).reduce((acc, curr) => acc + curr, 0)
//   console.log(result);
