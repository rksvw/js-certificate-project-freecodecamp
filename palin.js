function palindrome(str) {
  const newStr = str.split(/[\W\s._-]{1,}/).join("");
  console.log(newStr)
  for (let i = 0, j = newStr.length - 1; i <= j; i++, j--) {
    if (newStr[i].toLowerCase() !== newStr[j].toLowerCase()) {
        return false;
    }
  }

  return true;
}

console.log(palindrome("_eye"));
