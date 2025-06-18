function translatePigLatin(str) {
    let saveIndex = 0;
    let newStr = "";
    let pigLatin = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            newStr = newStr + str[i];
        } else {
            saveIndex = i;
            break;
        }
    }

    if (saveIndex === 0 && (newStr !== str)) {
        newStr = newStr + "way";
    } else {
        if (newStr === str) {
            return newStr + "ay";
        }
        newStr = newStr + "ay";
    }

    pigLatin = str.slice(saveIndex).concat(newStr);
    console.log(pigLatin);
    return pigLatin;
}


console.log(translatePigLatin("lololololo"));
