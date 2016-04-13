var prompt = require("prompt");
var fs = require("fs");

var students = require("./student.js");
var bus = require("./bus.js");


//var makeBus = new onDaBus();
prompt.start();

	prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
  var makeStudent = new makeStudent(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

  student.canStudentHaveFun();
});

var newStudents = makeStudent();





