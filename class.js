var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.name);
    };
    return Student;
}());
var s = new Student("Shushant");
s.display();
