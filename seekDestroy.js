function destroyer(arr, ...argument) {
  let newArr = [];

  newArr = arr.filter(value => !argument.includes(value))
  return newArr;
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
