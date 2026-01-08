var Employee = { id: 1, name: "Ajay", salary: 10000 }

for (var value in Employee) {
    const k = value as keyof typeof Employee
    console.log(value)
    console.log(Employee[k])
}

var{ id, name: employeeName, salary } = Employee
console.log(id)
console.log(employeeName)
console.log(salary)