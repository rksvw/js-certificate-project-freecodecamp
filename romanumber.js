function convertToRoman(num) {
    let numeral = num;
    let divide = 10;
    let str = "";

    while (numeral != 0) {
        let mynum = numeral % divide;
        numeral = numeral - mynum;
        divide = divide * 10;
        let chuncksRoman = "";
        while (mynum != 0) {
            if (mynum >= 1 && mynum <= 4) {
                if (mynum === 4) {
                    chuncksRoman = "IV".concat(chuncksRoman);
                    mynum = mynum - 4;
                } else {
                    chuncksRoman = chuncksRoman.concat("I");
                    mynum = mynum - 1;
                }
            } else if (mynum >= 5 && mynum <= 9) {
                if (mynum === 9) {
                    chuncksRoman = "IX".concat(chuncksRoman);
                    mynum = mynum - 9;
                } else {
                    chuncksRoman = chuncksRoman.concat("V");
                    mynum = mynum - 5;
                }
            } else if (mynum >= 10 && mynum <= 40) {
                if (mynum === 40) {
                    chuncksRoman = "XL".concat(chuncksRoman);
                    mynum = mynum - 40;
                } else {
                    chuncksRoman = chuncksRoman.concat("X");
                    mynum -= 10;
                }
            } else if (mynum >= 50 && mynum <= 90) {
                if (mynum == 90) {
                    chuncksRoman = "XC".concat(chuncksRoman);
                    mynum -= 90;
                } else {
                    chuncksRoman = chuncksRoman.concat("L");
                    mynum -= 50;
                }
            } else if (mynum >= 100 && mynum <= 400) {
                if (mynum === 400)  {
                    chuncksRoman = "CD".concat(chuncksRoman);
                    mynum -= 400;
                } else {
                    chuncksRoman = chuncksRoman.concat("C");
                    mynum -= 100;
                }
            } else if (mynum >= 500 && mynum <= 900) {
                if (mynum === 900) {
                    chuncksRoman = "CM".concat(chuncksRoman);
                    mynum -= 900;
                } else {
                    chuncksRoman = chuncksRoman.concat("D");
                    mynum -= 500;
                }
            } else {
                chuncksRoman = chuncksRoman.concat("M");
                mynum -= 1000;
            }
        }
        console.log(str);
        console.log(chuncksRoman)
        str = chuncksRoman.concat(str);
    }
    return str;

}
console.log(convertToRoman(16))
