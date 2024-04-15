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
// let names = []

// for (const member of members) {
//     names.push(member.name)
// }

// console.log(names);

// 2. Make everyone's last names in UPPERCASE in given array of objects
// for (let i = 0; i < members.length; i++) {
//     let memberName = members[i].name;
//     let nameArr = memberName.split(' ')
//     let lastname = nameArr[nameArr.length - 1];
//     members[i].name = nameArr.slice(0, -1).join(' ') + " " + lastname.toUpperCase();
// }

// console.log(members);

// 3. Get entries where age is between 41-60
// let result = []
// members.forEach((member) => {
//     let memberAge = member.age;
//     (memberAge >= 41 && memberAge <= 60) ? result.push(memberAge) : null
// })
// console.log(result);

// 4. Get average age
// let size = 0;
// let sum = 0;
// for (let i = 0; i < members.length; i++) {
//   if (members[i].age != undefined) {
//     let memberAge = members[i].age;
//     sum += memberAge;
//     size++;
//   }
// }

// let ans = sum / size;
// console.log(ans);

// 5. Get Person with maximum age
// let findMax = -Infinity;
// for (const member of members) {
//     if(member.age > findMax){
//         findMax = member.age
//     }
// }
// console.log(findMax);

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
// for (let i = 0; i < members.length; i++) {
//   if (members[i].age < 35) {
//     result.young.push(members[i].name);
//   } else if (members[i].age > 35) {
//     result.old.push(members[i].name);
//   } else {
//     result.noage.push(members[i].name);
//   }
// }
// console.log(result);

// 7. add a new member to same members array instance at index 2

// members.splice(2, 0, {
//     name : "Manoj kumar sharma",
//     age: 42
// })
// console.log(members);

// 8. extract first and second element using destructing

// for (const member of members) {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// }

// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

// let newMembers = []
// newMembers.push({
//     name: "Ramswaroop sharma",
//     age: 50
// })
// for (const member of members) {
//     newMembers.push(member)
// }
// console.log(newMembers);

// 10. Extract properties of object using destructuring
// for (const member of members) {
//     const {name, age} = member
//     console.log(name);
//     console.log(age);
// }

// 11. Rename extracted property of object while destructing
// for (const member of members) {
//     const {name : memberName, age: memberAge} = member
//     console.log(memberName);
//     console.log(memberAge);
// }

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

// for (const member of members) {
//     const {name : memberName, ...rest} = member
//     console.log(memberName);
//     console.log(rest);
// }

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

// const {name: memberName, ...restProp} = members[2];
// restProp.age = 50
// console.log(restProp);

// another example

// let person = {
//     name: "John",
//     age: 30,
//     city : "New York",
//     country : "USA"
// }

// const {name, ...rest} = person
// console.log(name);
// console.log(rest);

// rest.age = 40
// console.log(rest);

// 14. Use reduce function on array and object

// reduce on array
// const  arr = [1, 2, 3, 4, 5]
// const ans = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(ans);

// reduce on object
// const data = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : 4,
//     e : 5
// }

// const result = Object.values(data).reduce((acc, curr) => acc + curr, 0)
// console.log(result);
