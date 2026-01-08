var grades = [70, 65, 70];
function gradleCalculator(grades) {
    var avgGrade = (grades[0] + grades[1] + grades[2]) / 3;
    if (avgGrade < 70) {
        console.log("Grade is C :(");
    }
    else if (avgGrade > 70 && avgGrade < 90) {
        console.log("Grade is B :) ");
    }
    else {
        console.log("Grade is A :) :) ");
    }
}
gradleCalculator(grades);
