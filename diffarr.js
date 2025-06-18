function diffArray(arr1, arr2) {
  let carr = arr1.concat(arr2);

  let newArr = carr.filter(item => !arr1.includes(item) || !arr2.includes(item))
  console.log(newArr)

  return newArr
}


diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
