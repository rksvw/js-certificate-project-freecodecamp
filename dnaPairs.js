function pairElements(str) {
  let copyStr = str.concat("");
  let pairDNA = [];

  for (let i = 0; i < copyStr.length; i++) {
    if (copyStr[i] === "A") {
      pairDNA.push([copyStr[i], "T"]);
    } else if (copyStr[i] === "T") {
      pairDNA.push([copyStr[i], "A"]);
    } else if (copyStr[i] === "C") {
      pairDNA.push([copyStr[i], "G"]);
    } else {
      pairDNA.push([copyStr[i], "C"]);
    }
  }

  return pairDNA;
}

console.log(pairElements("TACGTT"))
