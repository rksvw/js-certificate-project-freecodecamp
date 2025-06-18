function fearNotLetter(str) {
     let alphabet = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     let alphaCount = alphaCode(str[0]) + 1;
     let i = 1;

     for (i, alphaCount; i < str.length; i++, alphaCount++) {
        if (alphaCode(str[i]) !== alphaCount) {
            return alphabet[alphaCount];
        }
     }

     return undefined;
}


function alphaCode(letter) {
    return letter.charCodeAt() - 97;
}


console.log(fearNotLetter("abcde"))
