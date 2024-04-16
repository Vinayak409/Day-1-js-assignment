const lodash = require("lodash");

// type bjType = {
//   name: string;
//   age?: number;
// };

interface objInt {
  name: string;
  age?: number;
}

const members: Array<objInt> = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Suresh Jangid", age: 40 },
  { name: "Tabish Khan", age: 41 },
  { name: "Rakesh Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone
// const names: string[] = [];

// for (const member of members) {
//   const fullname = member.name;
//   const nameArr = fullname.split(" ");
//   names.push(nameArr[0]);
// }

// console.log(names);

// 2. Make everyone's last names in UPPERCASE in given array of objects
// const updatedMembers : objInt[] = lodash.map(members, (member : objInt) => {
//   const memberName : string= member.name;
//   const nameArr : string[] = memberName.split(" ");
//   const lastname : string = lodash.last(nameArr);
//   const firstname : string = lodash.initial(nameArr).join(" ");

//   const uppercaseLastname : string = lodash.toUpper(lastname);

//   return {
//     ...member,
//     name: firstname + " " + uppercaseLastname,
//   };
// });

// console.log(updatedMembers);

//   3. Get entries where age is between 41-60
// const result : objInt[] = lodash.filter(members, (curr : objInt)  => curr.age !== undefined && curr.age >=41 && curr.age<=60);
// console.log(result);

// 4. Get average age
// let size : number= 0;

// let sum : number = lodash.reduce(members, (acc : number, curr : objInt) => {
//   if (curr.age !== undefined) {
//     size++;
//     return acc + curr.age;
//   }
//   return acc;
// }, 0);

// const ans=  sum / size;

// console.log(ans);

// 5. Get Person with maximum age
// const findMax : number = lodash.reduce(members, (acc : number, curr : objInt) => curr.age ? curr.age : acc, 0)
// console.log(findMax);

// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old

// interface obj {
//   young: string[];
//   old: string[];
//   noage: string[];
// }

// let result: obj = {
//   young: [],
//   old: [],
//   noage: [],
// };

// result = lodash.reduce(members, (acc : obj, curr : objInt) => {
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
//   name: "Manoj kumar sharma",
//   age: 42,
// });
// console.log(members);

// 8. extract first and second element using destructing

// lodash.forEach(members, (member : objInt) => {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// });

//   9. Create a new array instance adding a new member at index 0,
//      and keeping existing afterwards

// const newMembers : objInt[]  = members;
// members.unshift({
//   name: "Ramswaroop sharma",
//   age: 50,
// });
// console.log(newMembers);

// 10. Extract properties of object using destructuring
// lodash.forEach(members, (member : objInt) => {
//   const { name, age } = member;
//   console.log(name);
//   console.log(age);
// });

//   11. Rename extracted property of object while destructing

// lodash.forEach(members, (member :  objInt) => {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// });

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

// lodash.forEach(members, (member :  objInt) => {
//   const { name: memberName, ...rest } = member;
//   console.log(memberName);
//   console.log(rest);
// });

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

// const newObj : objInt = {...members[2], age : 50}
// console.log(newObj);

// 14. Use reduce function on array and object

// reduce on array
// const arr : number[] = [1, 2, 3, 4, 5];
// const ans : number = lodash.reduce(arr, (acc : number, curr : number) => acc + curr, 0);
// console.log(ans);

// reduce on object

interface dataInt {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
}

interface resultInt {
  [x: string]: string[];
}
const data: dataInt = {
  a: 1,
  b: 2,
  c: 1,
  d: 2,
  e: 1,
};

const ans = lodash.reduce(
  data,
  (result: resultInt, value: number, key: string) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);

console.log(ans);
