// Javascript Programs
/*
    A computer program is a list of "instructions" to be "executed" by a computer.

    In a programming language, these programming instruction are called statements.

    A Javascript program is a list of programming statements.

    In HTML, Javascript programs are executed by the web browser.
*/

let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y; // Statement 4

// Javascript Statements
/*
    JavaScript statements are composed of:

    Values, Operators, Expressions, Keywords, and Comments.

    This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":
*/

document.getElementById("demo").innerHTML = "Hello Dolly.";

/*
    Most JavaScript programs contain many JavaScript statements.

    The statements are executed, one by one, in the same order as they are written.

    JavaScript programs (and JavaScript statements) are often called JavaScript code.
*/

// Semicolon ;
/*
    Semicolons separate JavaScript statements.

    Add a semicolon at the end of each executable statement.
*/

let a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

/* 
    When separated by semicolons, multiple statements on one line are allowed.
*/

a = 5;
b = 6;
c = a + b;

// Javascript White Space
/* 
    JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

    The following lines are equivalent.
*/

let variableA = "Hege";
let variableB = "Hege";

/*
    A good practice is to put spaces around operators ( = + - * / ).
*/

let myVar = y + z;

// JavaScript Line Length and Line Breaks
/*
    For best readability, programmers often like to avoid code lines longer than 80 characters.

    If a JavaScript statement does not fit on one line, the best place to break it is after an operator.
*/

document.getElementById("demo").innerHTML = "Hello Dolly";

// Javascript Code Blocks
/*
    JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

    The purpose of code blocks is to define statements to be executed together.

    One place you will find statements grouped together in blocks, is in JavaScript functions.
*/

function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "Hello Dolly?";
}
