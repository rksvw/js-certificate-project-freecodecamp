function smallestCommons(arr) {

  arr.sort((a, b) => a-b);

    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }


    // Find the LCM of all numbers in the array
    let result = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
        console.log("result of lcm",result)
        result = findLCM(result, newArr[i]);
    }
    console.log(result);
    return result;
}

// Find LCM of two numbers
function findLCM(a, b) {
    let lcm = (a * b) / findGCD(a, b);
    console.log("lcm finding",lcm)
    return lcm;
}

// Find GCD (Greatest Common Divisor) using Euclidean algorithm
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// This function gets prime factorization of a number
function getPrimeFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

smallestCommons([5,1]);
