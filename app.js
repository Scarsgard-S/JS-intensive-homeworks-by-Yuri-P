//commit 1
"use strict";

function hello_js () {
    console.log("Привет, интенсив!");
}

hello_js();

let b = true;

// commit 2
function booleanToString() {
    return b ? "true" : "false";
}

console.log(booleanToString(b));

//commit 3
let s = "Let's travel abroad shall we"

function findShort(s) {
    let words = s.split(' ');
    let min = words[0].length;
    
    for (let word of words) {
      if (word.length < min) {
        min = word.length;
      }
    }
    
    return min;
}

console.log(findShort(s));