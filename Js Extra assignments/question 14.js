//A program to print the Fibonacci series
// Fibonacci series javascript code 

function fibonacciSeries(n){
    let numberPrevious = 0;
    let numberCurrent = 1;
    let numberNext;
    let fibArr = [];
   for(let i = 0; i < n; i++){                                 /**first step 0 will push to arr*/
        fibArr.push(numberPrevious) ;                           //then  1=0+1;
        numberNext = numberPrevious + numberCurrent;            //then 1=1 numcurrent value will assign to numberprevious
        numberPrevious = numberCurrent;                         //number current will get  numberNext value 1
        numberCurrent = numberNext;                              //second step 
   }                                                             //i=1;i<10 condition true
   console.log('Fibonacci series : ' +fibArr)                    //
}

fibonacciSeries(10);
 