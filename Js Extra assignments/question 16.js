//Write a program to find the sum of all the multiples of 3 or 5 below a given number.

let enternum=3;

function sumOf(num){
    let multiplethree=3;
    sum=0;

    for(let i=1;i<=num;i++){
        
      sum=sum+multiplethree*i

     
    }
    console.log(sum)

}

sumOf(enternum);