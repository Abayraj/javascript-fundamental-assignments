//Write a function to calculate the sum of all even numbers between 1 and n.
let num=25;
let sum=0;
for(let i=1;i<num;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum);