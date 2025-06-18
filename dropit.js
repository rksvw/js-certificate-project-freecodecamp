function dropElements(arr, func) {
    let newArr = arr.concat([]);
    let resultArr = [];
    let i = 0;
    for (i; i < newArr.length; i++) {
        if (func(newArr[i])) {
            break;
        }
    }

    for (i ; i < newArr.length; i++) {
        resultArr.push(newArr[i]);
    }

    return resultArr;
}


let ans = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})

console.log(ans)
