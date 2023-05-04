// Write a JavaScript program to test the first character of a string is uppercase or not. Using regular expression

function checkstr(str) {
    const regex = /^[A-Z]/; // Regular expression to match uppercase letter at beginning of string
    return regex.test(str);
}

let str = "Abay";
let out = checkstr(str);
console.log(out);
