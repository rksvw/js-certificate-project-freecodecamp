// function addTogether() {

// console.log(arguments)
// const [first, _$second] = arguments;
// console.log(first, " ", _$second, " ")
//   let size = val.length;
//   let newArr = val;
//   let sum = 0;

//   if (typeof val[0] === "number") {
//     for (let i = 0; i < size; i++) {
//       if (Number(newArr[i]) === newArr[i]) {
//         sum = sum + newArr[i];
//       } else {
//         return undefined;
//       }
//     }
//     console.log(sum);

//     if (sum === newArr[0]) {
//       return function () {};
//     }
//     return sum;
//   }
//   if (typeof (_ & second) === "number") return val[0] + second;
// }

// function addTogether(...args) {
//     console.log(arguments)
//   for (let i = 0; i < args.length; i++) {
//     if ((typeof args[i] === 'number') && i == (args.length - 1)) {
//       break;
//     } else if (typeof args[i] === 'number') {
//       continue;
//     } else if (typeof args[i] !== 'number'){
//       return undefined;
//     }
//   }

//   if (args.length == 1) {
//     return num => addTogether(args + num);
//   } else if (args.length == 2) {
//     return args[0] + args[1];
//   } else {
//     return undefined;
//   }

// }

function addTogether() {
  let sum = 0;
  const args = arguments;
  if (args.length === 1) {
    return function (x) {
      if (Number(x) === x) {
        return args[0] + x;
      } else {
        return undefined;
      }
    };
  } else {
    for (let i = 0; i < args.length; i++) {
      if (Number(args[i]) === args[i]) {
        sum = sum + args[i];
      } else {
        return undefined;
      }
    }
  }

  return sum;
}

console.log(addTogether(5));
console.log("\n");
console.log(addTogether(2, 3));
console.log("\n");

console.log(addTogether(7)(5));
console.log("\n");

console.log(addTogether(1)([6]));
console.log("\n");
