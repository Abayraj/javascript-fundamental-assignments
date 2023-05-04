//4.Write a JavaScript function to convert a string into camel case

tocamelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(tocamelize("JavaScript Exercises"));
console.log(tocamelize("JavaScript exercises"));
console.log(tocamelize("JavaScriptExercises"));



