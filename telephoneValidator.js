function telephoneCheck(str) {
  const newStr = str.concat("");
  let stack = [];
  for(let i = 0; i < newStr.length; i++){
    if (newStr[i] === "(") {
      stack.push(newStr[i]);
    }

    if (newStr[i] === ")") {
      if (stack.includes("(")) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack[0] === "(") {
    return false;
  }
  const regex = /^(1)?(\s)?(\()?[0-9]{3}(\))?(-)?(\s)?[0-9]{3}(\s)?(-)?[0-9]{4}$/;
  const testTelephone = regex.test(newStr)

  console.log(testTelephone)
  return testTelephone;
}

console.log(telephoneCheck("1 (555)-555-5555"));
