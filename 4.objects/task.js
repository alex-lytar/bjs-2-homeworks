function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.setSubject = function (subjectName) {
//ваш код
this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
//ваш код
if (this.marks === undefined) {
  this.marks = [mark];
}
else {
  this.marks.push(mark);
}
}
Student.prototype.addMarks = function (...rest) {
//ваш код
if (this.marks === undefined) {
  this.marks = [...rest];
}
else {
  this.marks.push(rest);
}
}
Student.prototype.getAverage = function () {
let sum = 0;
this.marks.forEach((mark) => {sum += parseInt(mark)});
return sum / this.marks.length; 
}
Student.prototype.exclude = function (reason) {
delete this.subject;
delete this.marks;
this.excluded = reason;
}
// ваш код для остальных методов