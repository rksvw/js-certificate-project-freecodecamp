function myReplace(str, search, replace) {
    let copyStr = str.concat("");
    let strArr = [];

    strArr = copyStr.split(' ').map((word) => {
        if (word === search) {

            if (word.charAt(0) === search.charAt(0).toUpperCase()) {
                const upperCaseWord = replace.charAt(0).toUpperCase() + replace.slice(1);
                return upperCaseWord;
            } else {
                const lowerCaseWord = replace.charAt(0).toLowerCase() + replace.slice(1);
                return lowerCaseWord;
            }
        } else {
            return word;
        }
    }).join(" ");

    return strArr;
}


console.log(myReplace("Hello world my Name is ritik", "ritik", "Monica"))
