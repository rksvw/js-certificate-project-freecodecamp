function binaryAgent(str) {
  let arr = str.split(" ");
  let result = "";

  arr.forEach((binary) => {
    let decimal = parseInt(binary, 2);
    result += String.fromCharCode(decimal);
  });
  return result;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

console.log("\n");

console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
);
console.log("\n\n\n\n");

function truthCheck(collection, pre) {
  let falsy = [];
  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i][pre] === null ||
      collection[i][pre] === undefined ||
      collection[i][pre] === "" ||
      collection[i][pre] === false
    ) {
      falsy.push(collection[i][pre]);
    } else {
      falsy.push(collection[i][pre]);
    }
  }

  //   console.log(falsy)
  for (let i = 0; i < falsy.length; i++) {
    if (
      falsy[i] === false ||
      falsy[i] === "" ||
      falsy[i] === null ||
      falsy[i] === undefined ||
      falsy[i].toString() === "NaN" ||
      falsy[i] === 0
    ) {
      return false;
    }
  }

  return true;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
);

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
);
