function whatIsInAName(collection, source) {
  const collectionMatch = [];
  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }

    if (!foundMismatch) {
      collectionMatch.push(collection[i]);
    }
  }
  return collectionMatch;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));



function spinalCase(str) {
  let copyStr = str.concat("");
  let fakeStr = '';


  for (let i = 0; i < copyStr.length; i++) {
   fakeStr = fakeStr + copyStr[i]

   if (copyStr[i+1] === undefined) {
      break;
   }

    if ((copyStr[i] != " ") && (copyStr[i+1] === copyStr[i+1].toUpperCase())) {
      fakeStr = fakeStr + " ";
    }
  }

  const val = fakeStr.split(/[\W._\s]{1,}/).join("-").toLocaleLowerCase()

  console.log(val)
  return str;
}

spinalCase("AllThe-small Things");


console.log("hello".slice(1))
