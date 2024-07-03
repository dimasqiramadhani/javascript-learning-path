/* 
    Javascript can "display" data in different ways:
        - Writing into an HTML element, using innerHTML.
        - Writing into the HTML output using document.write().
        - Writing into an alert box, using window.alert().
        - Writing into thet browser console, using console.log(). 
*/

// Using innerHTML
/* 
    To access an HTML element, Javascript can use the document.getElementById(id) method.
*/

document.getElementById("demo").innerHTML = 5 + 4;

// Using document.write()
/*
    for testing purpose, it is convenient to use document.write()
*/

document.write(5 + 6);

// Using window.alert()
/*
    You can skip the window keyword.

    In Javascript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional.
*/

window.alert("Hello, World!");
alert("Hello, World!");

// Using console.log()
/*
    For debugging purposes, you can call the console.log() method in the browser to display data.
*/

console.log("Hello, World!");

// Javascript print
/* 
    Javascript does not have any print object or print methods. You cannot access output devices from Javascript.

    The only exception is that you can call the window.print() method in the browser to print the content of the current window.
*/

window.print();
