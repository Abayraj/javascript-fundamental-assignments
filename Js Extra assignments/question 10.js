//Write a program to find the maximum and minimum elements in an array of integers.

let arr=[10,2,30,4,5,6,7],max=arr[0],min=arr[0];

for(let i=0;i<arr.length;i++){

    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];

    }

    }
    console.log("max element is "+max);
    console.log("min element is "+min);
    
