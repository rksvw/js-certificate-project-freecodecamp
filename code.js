function mutation(arr) {
  let testStr = arr[0].toLowerCase();
  let targetStr = arr[1].toLowerCase();

  for (let i = 0; i < targetStr.length; i++) {
    let regex = new RegExp(targetStr[i], "i");

    if (!testStr.match(regex)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let temp = [];
  let idx = 0;
  let tempSize = size;

  while (idx < arr.length) {
    for (idx; idx < size; idx++) {
        if (arr[idx] == undefined) {
            continue;
        }
      temp.push(arr[idx]);
    }

    newArr.push(temp);
    temp = [];
    size = tempSize + size;
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));


