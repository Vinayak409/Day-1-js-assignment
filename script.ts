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
// let names : string[] = []
// for (const member of members) {
//   names.push(member.name);
// }
// console.log(names)

// 2. Make everyone's last names in UPPERCASE in given array of objects
// for (let i = 0; i < members.length; i++) {
//   let memberName: string = members[i].name;
//   let nameArr: string[] = memberName.split(" ");
//   let lastname: string = nameArr[nameArr.length - 1];
//   members[i].name = nameArr.slice(0, -1).join(" ") + " " + lastname.toUpperCase();
// }

// console.log(members);

//  3. Get entries where age is between 41-60
// let result : number[] = [];
// members.forEach((member) => {
//   let memberAge : number | undefined = member.age;
//   memberAge != undefined && memberAge >= 41 && memberAge <= 60 ? result.push(memberAge) : null;
// });
// console.log(result);

// 4. Get average age
// let size: number = 0;
// let sum: number = 0;
// for (let i = 0; i < members.length; i++) {
//   if (members[i].age != undefined) {
//     let memberAge: number | undefined = members[i].age;
//     if (memberAge != undefined) {
//       sum += memberAge;
//     }
//     size++;
//   }
// }

// let ans = sum / size;
// console.log(ans);

// 5. Get Person with maximum age
// let findMax: number = -Infinity;
// for (const member of members) {
//   if (member.age != undefined && member.age > findMax) {
//     findMax = member.age;
//   }
// }
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

// for (const member of members) {
//   if (member.age !== undefined) {
//     if (member.age != undefined && member.age < 35) {
//       result.young.push(member.name);
//     } else if (member.age != undefined && member.age > 35) {
//       result.old.push(member.name);
//     }
//   } else {
//     result.noage.push(member.name);
//   }
// }

// console.log(result);

// 7. add a new member to same members array instance at index 2

// members.splice(2, 0, {
//   name: "Manoj kumar sharma",
//   age: 42,
// });
// console.log(members);

// 8. extract first and second element using destructing

// for (const member of members) {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// }

// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

// let newMembers : objInt[]  = []
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
//   const { name, age } = member;
//   console.log(name);
//   console.log(age);
// }

// / 11. Rename extracted property of object while destructing
// let member : objInt;
// for (member of members) {
//   const { name: memberName, age: memberAge } = member;
//   console.log(memberName);
//   console.log(memberAge);
// }

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

// for (const member of members) {
//   const { name: memberName, ...rest } = member;
//   console.log(memberName);
//   console.log(rest);
// }

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step

// const {name: memberName, ...restProp} = members[2];
// restProp.age = 50
// console.log(restProp);

// another example

// interface personObj {
//   name: string;
//   age: number;
//   city: string;
//   country: string;
// }

// let person: personObj = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// const {name : pname, ...rest} = person
// console.log(pname);
// console.log(rest);

// rest.age = 40
// console.log(rest);

// 14. Use reduce function on array and object

// reduce on array
// const arr: number[] = [1, 2, 3, 4, 5];
// const ans: number = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(ans);

// reduce on object
// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };

// const result : number = Object.values(data).reduce((acc, curr) => acc + curr, 0);
// console.log(result);
