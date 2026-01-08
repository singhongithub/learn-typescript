const input = prompt("Please enter a number.");



if (input === null) {
    console.log("Input cancelled.");
}
else {
    if (parseInt(input) % 2 == 0) {
        console.log("Numbe is even");
    } else {
        console.log("Number is odd");
    }
}
