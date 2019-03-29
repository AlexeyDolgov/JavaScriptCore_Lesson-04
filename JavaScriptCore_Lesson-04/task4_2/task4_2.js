let student1 = { yearOfStudying: 5, facultyName: "Физический" };
let student2 = { yearOfStudying: 3, facultyName: "Юридический" };
let student3 = { yearOfStudying: 1, facultyName: "Психологический" };
let student4 = { yearOfStudying: 3, facultyName: "Иностранных языков" };
let student5 = { yearOfStudying: 2, facultyName: "Философский" };
let student6 = { yearOfStudying: 2, facultyName: "Химический" };
let student7 = { yearOfStudying: 4, facultyName: "Экономики и менеджмента" };
let student8 = { yearOfStudying: 5, facultyName: "Филологический" };
let student9 = { yearOfStudying: 3, facultyName: "Физико-технический" };
let student10 = { yearOfStudying: 2, facultyName: "Механико-математический" };

let students = []; 
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function getFacultyName(student) {
	return student.facultyName;
}

let listOfFaculties = students.map(getFacultyName).sort();
console.log(listOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, currentStudent) {
	return sumYearsOfStudying + currentStudent.yearOfStudying;
}

let totalYearsOfStudying = students.reduce(sumStudentsYearsOfStudying, 0);
console.log(totalYearsOfStudying);