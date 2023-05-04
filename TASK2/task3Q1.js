//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

let num1 = 2;
let num2 = -4;
let num3 = 3;

let product = num1 * num2 * num3;

if (product > 0) {
  alert("The sign of the product is positive.");
  console.log("the product is positive")
} else if (product < 0) {
  alert("The sign of the product is negative.");
  console.log("the product is negative")
} else {
  alert("The product is zero.");
  console.log("the product is zero")
}