function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    })
}

arr = [1, 5, 2, 3, 4]
console.log(ascendingOrder(arr))

char = ['z', 's', 'l', 'h', 'b']
function reverseAlpha(char) {
    return char.sort((a, b) => {
        return a === b ? 0 : a < b ? 1 : -1;
    })
}


const sorts = reverseAlpha(char)

const ascOrder = (char) => {
    const sorts = char.sort((a, b) => {
        return a === b ? 0 : a < b ? -1 : 1;
    })

    return sorts;
}
console.log(char)
console.log(ascOrder(char))

const cpSort = (arr) => {
    const cparr = arr.concat([]);
    const sortArr = cparr.sort((a, b) => {
        return a - b;
    })

    return sortArr;
}

console.log(cpSort([2, 4, 1, 9, 5, 3]))


function splitify(str) {
  // Only change code below this line

  const slit = str.split(/\W/);

  return slit


  // Only change code above this line
}

splitify("Hello World,I-am code");


function sentensify(str) {
  // Only change code below this line
  const slit = str.split(/\W/);
  console.log(slit)
  const concate = slit.join(" ")
  console.log(concate)
  return concate;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");



// ! Strings to URL Slugs Converter
// Only change code below this line
function urlSlug(title) {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");


// Only change code below this line
function urlSlug(title) {
  const slugish = [];
  const slug = title.toLowerCase().split(/\s{1,}/i);
  slug.map((d) => {
    if (d == "" || d == " ") {

    } else {
      slugish.push(d)
    }
  })

  const uSlug = slugish.join("-");
  return uSlug

}
// Only change code above this line
urlSlug(" A Mind Needs Books Like A Sword Needs A Whetstone");

// ! The arity of a function is the number of arguments it requires.
function add(x) {
  // Only change code below this line
  return function(y) {

    return function(z) {
      return x + y + z;
    }
  }

  // Only change code above this line
}

add(10)(20)(30);
