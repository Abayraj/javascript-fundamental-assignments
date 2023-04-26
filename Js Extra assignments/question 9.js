

 

// // function to check if a given number is prime
// function isPrime( n)
// {
//       // since 0 and 1 is not prime return false.
//       if(n == 1 || n == 0) return false;
   
//       // Run a loop from 2 to n-1
//       for(var i = 2; i < n; i++)
//       {
       
//         // if the number is divisible by i, then n is not a prime number.
//         if(n % i == 0) return false;
//       }
//       // otherwise, n is prime number.
//       return true;
// }
 
 
// // Driver code
// var N = 100;
 
// // check for every number from 1 to N
//   for(var i = 2; i <= N; i++)
//   {
//       // check if current number is prime
//       if(isPrime(i)) {
//         console.log( i );
//       }
// }
// var num=96;
// for (let counter = 2; counter <= num; counter++) {
//   var notPrime = false;
//   for (let i = 2; i <= counter; i++) {
//       if (counter%i===0 && i!==counter) {
//           notPrime = true;
//       }
//   }
//   if (notPrime === false) {
//               console.log(counter);
//   }
// }
//Write a function to generate all prime numbers up to a given limit 
function primeAll(n){
  for(let i = 1; i <= n; i++){
        if(isPrime(i)){
              console.log( i );
        }
  }

}
function isPrime(n){
  if(n ==1 || n == 0){
        return false;
  }
 for(let i = 2; i <= n/2; i++){
  if(n % i == 0){
        return false;
        break;
  }
 }
 return true;
}
primeAll(30);