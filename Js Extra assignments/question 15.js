//Write a program to find the sum of all prime numbers up to a given limit. 


function primeSum(n){
    let sum = 0;
    for(let i = 2; i <= n; i++){
          if(((i % 2 !==0) || i == 2) && ((i % 3 !==0) || i == 3) &&((i % 5 !==0) || i == 5) && ((i % 2 !==7) || i == 7)){
                sum += i;
          }
    }
    console.log('Sum of Prime numbers : '+ sum);
}

primeSum(40);
