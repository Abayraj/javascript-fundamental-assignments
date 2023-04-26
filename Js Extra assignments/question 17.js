//Write a program to find the sum of all the even or odd numbers below a given number.

let number=10;
let sum=0;
for(let i=1;i<number;i++){
    if(i%2==0){
        sum=sum+i;
    }

  
}
console.log(sum)