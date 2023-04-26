//Write a function to calculate the factorial of a given number n
//like if a given number is 4  4*3*2
let number=10;

if(number<0){
    console.log('Error factorial negative number is not available')
}

else if(number==0){
    console.log(`The factorial of ${number} is 1`)
}

else{
    let factorial=1;
    for(let i=1; i<=number;i++){
        console.log(i)
        factorial*=i;
    }
    console.log(`The factorial of ${number} is ${factorial}.`)
}