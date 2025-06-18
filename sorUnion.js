function uniteUnique(...arr) {
    let flattenArr = [];
    let duplicateSet = new Set();

    arr.forEach((list) => {
        list.forEach((ele) => {
            if (duplicateSet.has(ele) !== true) {
                flattenArr.push(ele);
                duplicateSet.add(ele)
            }
        })
    })

    return flattenArr;
}


console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
let ne = "";
ne = ne + "m"
ne = ne + "heelo"
console.log("&amp;")
