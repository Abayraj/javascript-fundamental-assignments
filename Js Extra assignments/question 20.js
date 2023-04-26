//Write a program to count the number of vowels in a given string.
function getCount(str){
    var vowelsCount =0;
var vowels = ['a','e','i','o','u']
for(let char of str){
    if(vowels.includes(char)){
    vowelsCount++
    console.log(vowelsCount)
    }
   }
  }
  let s="bat";
getCount(s);
