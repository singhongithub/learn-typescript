var inputNumber = prompt("Enter a number");

var primeValidator = (n: number): string => {

    if (n <= 1) {
        return "Number is not prime.";

    }


    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Number is not prime.";
        }

    }
    return "Number is prime.";
}


if (inputNumber != null) {
    console.log( primeValidator(parseInt(inputNumber)))
   
}
