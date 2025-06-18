function convertHTML(str) {
    let copyStr = str.concat("");
    let htmlEntities = "";

    for (let i = 0; i < copyStr.length; i++) {
        if (copyStr[i] === "'") {
            htmlEntities = htmlEntities + "&apos;"
        } else if (copyStr[i] === '"') {
            htmlEntities = htmlEntities + "&quot;"
        } else if (copyStr[i] === "<") {
            htmlEntities = htmlEntities + "&lt;"
        } else if (copyStr[i] === ">") {
            htmlEntities = htmlEntities + "&gt;"
        } else if (copyStr[i] === '&') {
            htmlEntities += "&amp;"
        } else {
            htmlEntities += copyStr[i];
        }
    }

    return htmlEntities;
}

console.log(convertHTML('Stuff in  & me > or < "quotation marks"'))
