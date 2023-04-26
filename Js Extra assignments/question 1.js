
// Write a function to find the maximum element in a array 
const array=[10,20,30,40,-5];
let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i] > max){

        max=array[i];

    };
    // if(array[i]<min){
    //     min=array[i];
    // };
}
console.log("max="+ max);
// console.log("min="+min);


// let array= [10,20,30,40,-5];
// minValue = Math.min(...array);
// maxValue = Math.max(...array);


