function steamRollArray(arr) {
    let newArr = arr.join(" ").split(/[\W\s]{1,}/);
    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'object') {
            continue;
        } else if (newArr[i] === 'Object') {
            result.push({});
        } else {
            if (Number(newArr[i])) {
                result.push(Number(newArr[i]));
            } else {
                result.push(newArr[i]);
            }
        }
    }

    console.log(result);
    return result;
}

steamRollArray([1, [2],[], [3,{}, 'a', 'b', [[4]]]])
