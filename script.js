// student Information

const studentName = document.getElementById("studentName");
const rollNumber = document.getElementById("rollNumber");

//subject Name

const subject1 = document.getElementById("subject1");
const subject2 = document.getElementById("subject2");
const subject3 = document.getElementById("subject3");
const subject4 = document.getElementById("subject4");
const subject5 = document.getElementById("subject5");   

//subject Marks

const marks1 = document.getElementById("marks1");   
const marks2 = document.getElementById("marks2");
const marks3 = document.getElementById("marks3");
const marks4 = document.getElementById("marks4");
const marks5 = document.getElementById("marks5");

//button

const calculateBtn = document.getElementById("calculateBtn");

//result

const totalMarks = document.getElementById("totalMarks");
const average = document.getElementById("average");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const status = document.getElementById("status");

calculateBtn.addEventListener("click", function () {

    let studentNameValue = studentName.value;
    let rollNumberValue = rollNumber.value;

    let subject1Value = subject1.value;
    let subject2Value = subject2.value;
    let subject3Value = subject3.value;
    let subject4Value = subject4.value;
    let subject5Value = subject5.value;

    let marks1Value = Number(marks1.value);
    let marks2Value = Number(marks2.value);
    let marks3Value = Number(marks3.value);
    let marks4Value = Number(marks4.value);
    let marks5Value = Number(marks5.value);

    console.log(studentNameValue);
    console.log(rollNumberValue);

    console.log(subject1Value, marks1Value);
    console.log(subject2Value, marks2Value);
    console.log(subject3Value, marks3Value);
    console.log(subject4Value, marks4Value);
    console.log(subject5Value, marks5Value);


});