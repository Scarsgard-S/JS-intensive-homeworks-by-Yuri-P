"use strict";

function hello_js () {
    console.log("Привет, интенсив!");
}

hello_js();

let b = true;

function booleanToString() {
    return b ? "true" : "false";
}

console.log(booleanToString(b));