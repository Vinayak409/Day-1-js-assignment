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
//     const fullname = member.name
//     const nameArr = fullname.split(' ')
//     names.push(nameArr[0])
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

// let sum = members.reduce((acc, curr) => {
//   if (curr.age !== undefined) {
//     size++;
//     return acc + curr.age;
//   }
//   return acc;
// }, 0);

// const ans=  sum / size;
// console.log(ans);

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
// let findMax = Number.NEGATIVE_INFINITY;

// const findMax = members.reduce((acc, curr) => curr.age ? curr.age : acc, 0)
// console.log(findMax);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

// const result = members.reduce((acc, curr) => {
//   if (curr.age && curr.age < 35) {
//     acc.young.push(curr.name);
//   } else if (curr.age !== undefined && curr.age > 35) {
//     acc.old.push(curr.name);
//   } else {
//     acc.noage.push(curr.name);
//   }
//   return acc
// },  {
//   young: [],
//   old: [],
//   noage: [],
// });

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

// const newMembers = members;
// newMembers.unshift({
//   name: "Ramswaroop sharma",
//   age: 50,
// });
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

// const newObj = {...members[2], age : 50}
// console.log(newObj);


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
