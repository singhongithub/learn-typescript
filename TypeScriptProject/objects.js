var Employee = { id: 1, name: "Ajay", salary: 10000 };
for (var value in Employee) {
    var k = value;
    console.log(value);
    console.log(Employee[k]);
}
var id = Employee.id, employeeName = Employee.name, salary = Employee.salary;
console.log(id);
console.log(employeeName);
console.log(salary);
