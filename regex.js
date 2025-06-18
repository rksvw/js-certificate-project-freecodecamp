// let criminalStr = "hoce moCce poce code"
// let criminalStr = "Cccccccccchagh!"

// let reCriminals = /C*/g;
// let result = criminalStr.match(reCriminals);
// console.log(result)

let quoteSample = "The five boxing wizards jump quickly._33_8!?";
let alphabetRegexV2 = /[\W+]/gi; // For all ![A-Za-z]
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

alphabetRegexV2 = /[\w+]/gi; // For all [A-Za-z0-9]
result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

alphabetRegexV2 = /[\d]/gi; // For only digit [0-9]
result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

alphabetRegexV2 = /[\D]/gi; // For only digit ![0-9]
result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

function checkName(nam) {
  let regexNam = /^[A-Za-z]{2,}\d*$|^[A-Za-z]{1,}\d+./g;
  let resultU = regexNam.test(nam);
  console.log(resultU)
}


list = ["hello", "hell", "h", 'he', "h1", "hello_new89", "he%ld","ritik872"]

console.log(list)

list.forEach((l) => {
    checkName(l)
})


