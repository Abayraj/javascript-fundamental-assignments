//Write a function to check if a given number is prime.

let num =7;

for(var i=2; i<num; i++){
    if(num%i==0){
        break;
    }

}
if(i==num){
    console.log("number is prime")
}
else{
    console.log("number is not prime")
}