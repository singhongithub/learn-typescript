var digits: number = 50;

for (var i = 1; i < digits; i++) {
    if (i % 5 === 0) {
        continue;

    } else {
        console.log(i);
    }
}

var j: number = 1;
while (j < digits) {
    if (j % 5 === 0) {

    } else {
        console.log(j);

    }
    j++;

}
