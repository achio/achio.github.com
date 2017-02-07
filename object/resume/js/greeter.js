var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + middleName + lastName;
    }
    ;
    return Student;
}());
;
function greeter(person) {
    return "hello," + person.fullName;
}
var user = new Student("monkey ", ". D .", " luffy");
console.log(greeter(user));
