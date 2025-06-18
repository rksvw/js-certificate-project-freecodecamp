function rot13(str) {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let decipher = "";
  const rotNum = 13;
  const asciiCode = alphabets[0].charCodeAt();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "!" || str[i] === "?" || str[i] === ".") {
      decipher = decipher + str[i];
      continue;
    }

    let code = str[i].charCodeAt() - asciiCode;
    console.log("Code 1", code);
    code = code - rotNum;
    if (code < 0) {
      code = code + alphabets.length;
    }
    decipher = decipher + alphabets[code];
  }
  console.log(decipher);
  return str;
}

rot13("SERR YBIR?");
