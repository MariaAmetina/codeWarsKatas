'use strict';
// function openOrSenior(data){
//     data.forEach(function(item, index) {
//       if (item[0] > 55 && item[1] > 7 && item[1] >= -2 && item[1] <= 26) {
//         data[index] = "Senior";

//       } else {
//         data[index] = "Open";
//       }
//     });
//     return data;
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

// function iqTest(numbers){
//     let arr = numbers.split(' ');
//     let even = 0;
//     let odd = 0;
//     let result;
//     arr.forEach(function(item){
//         (item % 2 == 0) ? even++ : odd++;
//     });
//     if (even == 1) {
//         arr.forEach(function(item, index){
//             item = Number(item);
//            if (item % 2 == 0) {
//                index += 1;
//                result = index;
//            }
//         });
//     }
//     if (odd == 1) {
//         arr.forEach(function(item, index){
//             item = Number(item);
//            if (item % 2 == 1) {
//                index += 1;
//                result = index;
//            }
//         });
//     }
//     return result;
// }
// function iqTest(numbers){
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});

//     var odd = numbers.filter(function(el){ return el % 2 === 1});
//     var even = numbers.filter(function(el){ return el % 2 === 0});

//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
//   }

// console.log(iqTest("2 4 7 8 10"));

// function disemvowel(str) {
//     return str = str.replace(/a|A|e|E|i|I|o|O|u|U/g, "");
// }
// console.log(disemvowel("You"));

// function solution(roman) {
//     roman = roman.split('');
//     let result = 0;
//     for (let i=0; i < roman.length; i++) {
//         if (roman[i]+roman[i+1] == 'IV'){
//             roman.splice(i, 2);
//             roman.push('IV');
//         }
//         if (roman[i]+roman[i+1] == 'IX'){
//             roman.splice(i, 2);
//             roman.push('IX');
//         }
//     }
//     console.log(roman);
//     for (let letter of roman) {
//         switch (letter) {
//             case 'M':
//                 result += 1000;
//                 break;
//             case 'D':
//                 result += 500;
//                 break;
//             case 'C':
//                 result += 100;
//                 break;
//             case 'L':
//                 result += 50;
//                 break;
//             case 'X':
//                 result += 10;
//                 break;
//             case 'V':
//                 result += 5;
//                 break;
//             case 'I':
//                 result += 1;
//                 break;
//             case 'IV':
//                 result += 4;
//                 break;
//             case 'IX':
//                 result += 9;
//                 break;
//         }
//     }
//     return result;
// }
// console.log(solution('XIX'));

// function spinWords(string){
//     let array = string.split(' ');
//     let result = [];
//     array.forEach(elem => {
//         let subarr = elem.split('');
//         (subarr.length >= 5) ? subarr.reverse() : false;
//         elem = subarr.join('');
//         result.push(elem);
//     });
//     return result.join(' ');
//   }
//   function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }
// console.log(spinWords("Hey fellow warriors"));

// function toWeirdCase(string){
//     let arr = string.split(' ');
//     let result = [];
//     for (let elem of arr) {
//         elem = elem.split('');
//         for (let i = 0; i < elem.length; i++) {
//             elem[i] = (i % 2 === 0) ? elem[i].toUpperCase() : elem[i].toLowerCase();

//         }
//         elem = elem.join('');
//         result.push(elem);

//     }

//     return result.join(' ');
// }
// function toWeirdCase(string){
//     return string.split(' ').map(function(word){
//       return word.split('').map(function(letter, index){
//         return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//       }).join('');
//     }).join(' ');
//   }
// console.log(toWeirdCase('this is a test'));

// function rot13(message){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let cipher = '';
//     message.split('').forEach(str => {
//         if (alphabet.indexOf(str) !== -1 || upper.indexOf(str) !== -1) {
//             let finStr = '';
//             if (str === str.toUpperCase()) {
//                 finStr = upper.substr(upper.indexOf(str, upper[-1])) + upper.substr(0, upper.indexOf(str));
//                 cipher += finStr[finStr.indexOf(str) + 13];
//             } else {
//                 finStr = alphabet.substr(alphabet.indexOf(str, alphabet[-1])) + alphabet.substr(0, alphabet.indexOf(str));
//                 cipher += finStr[finStr.indexOf(str) + 13];
//             }
//         } else {
//             cipher += str;
//         }

//     });
//     return cipher;
// }
// console.log(rot13('Test'));

//🌈 //ctrl+command+ пробел

// let friend1 = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     fullName() {
//         return this.fullName = this.firstName + ' ' + this.lastName
//     },

//     calcBMI() {
//         return this.BMI = this.mass / this.height ** 2;
//     }
// }
// let friend2 = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     fullName() {
//         return this.fullName = this.firstName + ' ' + this.lastName
//     },

//     calcBMI() {
//         return this.BMI = this.mass / this.height ** 2;
//     }
// }
// console.log(friend1.calcBMI() > friend2.calcBMI() ? `${friend1.fullName()}'s BMI
// (${friend1.BMI}) is higher than ${friend2.fullName()}'s BMI
// (${friend2.BMI})` : `${friend2.fullName}'s BMI
// (${friend2.BMI}) is higher than ${friend1.fullName}'s BMI
// (${friend1.BMI})`);

// console.log(`${friend1.fullName} weights ${friend1.mass} kg and
// is ${friend1.height} m tall. ${friend2.fullName} weights ${friend2.mass} kg and
// is ${friend2.height} m tall.`);

// console.log(1);
// console.log(2);

// function foo(num) {
//   setTimeout(() => {
//     let ss = 145 * num;
//     console.log(ss);
//   }, 1000);
// }

// foo(12);

// console.log(4);

// function scramble(str1, str2) {
//   let result = true;
//   str1 = str1.split('');
//   str2 = str2.split('');
//   str2.every((element) => {
//     if (str1.indexOf(element) === -1) {
//       result = false;
//     } else {
//       str1.splice(str1.indexOf(element), 1);
//     }
//   });
//   return result;
// }
// function scramble(str1, str2) {
//   let [arr1, arr2] = [str1.split(''), str2.split('')];
//   let result = true;
//   if (arr1.length < arr2.length) {
//     result = false;
//   }
//   arr2.every((x) =>
//     arr1.indexOf(x) === -1 ? (result = false) : arr1.splice(arr1.indexOf(x), 1)
//   );
//   return result;
// }

// function scramble(str1, str2) {
//   const lettersCounts = {};
//   for (let i = 0; i < str1.length; i++) {
//     const currentLetter = str1[i];
//     lettersCounts[currentLetter] = lettersCounts[currentLetter] || 0;
//     lettersCounts[currentLetter]++;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     const currentLetter = str2[i];
//     if (lettersCounts[currentLetter] > 0) {
//       lettersCounts[currentLetter]--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(scramble('masha', 'asha'));

// function cakes(recipe, available) {
//   let result = 0;
//   let arrayRes = [];
//   for (let [key, value] of Object.entries(recipe)) {
//     for (let [keyAv, valueAv] of Object.entries(available)) {
//       if (key === keyAv && value <= valueAv) {
//         result = Math.trunc(valueAv / value);
//       } else if (key === keyAv && value >= valueAv) {
//         result = 0;
//       }
//     }
//     arrayRes.push(result);
//   }
//   return Math.min(...arrayRes);
// }

// //вроде рабочий варик тоже
// function cakes(recipe, available) {
//   let result = [];
//   for (let key in recipe) {
//     if (key in available) {
//       result.push(Math.floor(available[key] / recipe[key]));
//     } else {
//       result.push(0);
//     }
//   }
//   return Math.min(...result);
// }

// console.log(cakes({ apples: 3, flour: 300 }, { sugar: 500, flour: 2000 }));

// function isValidWalk(walk) {
//   let letterCounts = {};
//   if (walk.length == 10) {
//     for (let i = 0; i < walk.length; i++) {
//       let current = walk[i];
//       letterCounts[current] = letterCounts[current] || 0;
//       letterCounts[current]++;
//     }
//     return letterCounts['n'] == letterCounts['s'] &&
//       letterCounts['w'] == letterCounts['e']
//       ? true
//       : false;
//   } else {
//     return false;
//   }
// }

// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n':
//         dy--;
//         break;
//       case 's':
//         dy++;
//         break;
//       case 'w':
//         dx--;
//         break;
//       case 'e':
//         dx++;
//         break;
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0;
// }
// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function (a) {
//       return a == val;
//     }).length;
//   }
//   return (
//     walk.length == 10 && count('n') == count('s') && count('w') == count('e')
//   );
// }
// function isValidWalk(walk) {
//   const north = walk.filter((item) => {
//     return item === 'n';
//   }).length;
//   const south = walk.filter((item) => {
//     return item === 's';
//   }).length;
//   const east = walk.filter((item) => {
//     return item === 'e';
//   }).length;
//   const west = walk.filter((item) => {
//     return item === 'w';
//   }).length;

//   return walk.length === 10 && north === south && east === west;
// }

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

function snail(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      result.push(array[i]);
    } else if (i > 0 && i < array.length - 1) {
      for (let k = 0; k < array[i].length; k++) {
        result.push(array[i][array[i].length - 1]);
      }
    } else if (i == array.length - 1) {
      result.push(array[array.length - 1].reverse());
    }
  }
  return result.flat();
}

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
