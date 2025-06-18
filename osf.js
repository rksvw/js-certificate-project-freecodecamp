function oddSumFibo(num) {
    let num1 = 0;
    let num2 = 1;
    let fibo = 0;
    let oddSum = 0;
    for(let i = 2; i <= num; i++) {
        fibo = num1 + num2;
        if (fibo % 2 !== 0 && fibo <= num) {
            oddSum = oddSum + fibo;
        }

        num1 = num2;
        num2 = fibo;
    }

    console.log(oddSum + 1);
}

oddSumFibo(5)




function sumOfPrime(num) {

    let sum = 0;

    for (let i = 2;i <= num; i++) {
        if (isPrime(i)) {
            sum = sum + i;
        }
    }

    console.log(sum);
}

function isPrime(num) {
    for (let i = 2; i*i <= num; i++){
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


sumOfPrime(977)
