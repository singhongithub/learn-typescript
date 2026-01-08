var vaccine = ["Pfizer", "Sputnik", "Johnson & Johnson"];

vaccine.push("Covaxin");


for (var vacc in vaccine) {
    console.log(vaccine[vacc]);
}

var[a, b, c, d] = vaccine;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
