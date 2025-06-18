let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
// let result = ohRegex.test(ohStr);
let result = ohStr.match(ohRegex);

console.log(result);

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g; // Change this line

let ret = reRegex.test(repeatNum);
let re = repeatNum.match(reRegex);
console.log(ret);
console.log(re);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let res = str.replace(fixRegex, replaceText);
console.log(res);

let hello = "   Hello, World!  ";
let wsRegex = /\s\s\s(\D+)\s(\D+)\s\s/; // Change this line
let resu = hello.replace(wsRegex, "$1 $2"); // Change this line
console.log(resu);

const Hel = "Hello";

let sts = "";
for (let i = 0; i < Hel.length; i++) {
  sts = Hel[i] + sts;
}

console.log(sts);

const strs = "What if we try a super-long word such as otorhinolaryngology";
console.log("\0");

let list = [];
let count = 0;
for (let i = 0; i < strs.length; i++) {
  if (strs[i] == " ") {
    list.push(count);
    count = 0;
  } else {
    count = count + 1;
  }
}

list.push(count);
let large = list[0];

list.forEach((e) => {
  if (large < e) {
    large = e;
  }
});

console.log(large);

let arr = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
];

// let arr = [
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]

large = 0;
let largeArr = [];
arr.forEach((e) => {
  e.forEach((f) => {
    if (large < f) {
      let temp = f;
      f = large;
      large = temp;
    }
  });
  largeArr.push(large);
  large = -100000;
});

console.log(largeArr);

function confirmEnding(str, target) {
  let tarLen = target.length;
  let strLen = str.length;
  let traverseLen = strLen - tarLen;
  let count = 0;

  for (let i = 0; i < strLen; i++) {
    if (i >= traverseLen) {
      console.log(str[i]);
      if (str[i] == target[count]) {
        count = count + 1;
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(confirmEnding("Decrate Do Momentoz", "Momentoz"));

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let temp = "";

  for (let i = 0; i < num; i++) {
    temp = temp + str;
  }

  return temp;
}

console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
  let temp = "";
  if (str.length <= num) {
    return str;
  }
  for (let i = 0; i < num; i++) {
    temp = temp + str[i];
  }
  temp = temp + "...";
  return temp;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

function findElement(arr, func) {
  let num = true;

  console.log(typeof num);
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

console.log(booWho(true));

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ");
  // str
  //   .split(" ")
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(" ");
  // return str;
}

console.log(titleCase("sHoRt AnD sToUt"));

function frankenSplice(arr1, arr2, n) {
  let temp = [];
  console.log(temp);
  let idx = 0;

  for (idx; idx < n; idx++) {
    temp.push(arr2[idx]);
  }

  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i]);
  }

  for (idx; idx < arr2.length; idx++) {
    temp.push(arr2[idx]);
  }
  console.log(temp);
  // return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      temp.push(arr[i]);
    } else {
      continue;
    }
  }

 return temp;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// console.log(bouncer([null, NaN, 1, 2, undefined]));

arr = [3, 5, 2, 1, 6]
console.log(arr.sort())
console.log(arr)



function getIndexToIns(arr, num) {

  arr.sort(function(a,b) {return a-b});

  if (arr[arr.length - 1] < num ) {
      return arr.length -1 ;
    }

  if (arr[0] == num || arr[0] == undefined) {
    return 0;
  }


  for (let i = 1; i < arr.length; i++) {

    if (arr[i] == num) {
      console.log(i)
      return i;
    }

    if (arr[i - 1] <= num && arr[i] >= num) {
      return i;
    }
  }

}

console.log(getIndexToIns([], 5));

