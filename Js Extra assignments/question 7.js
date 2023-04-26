//Write a function to remove duplicates from a array

// let arr=[1,2,3,3,4,5,5]
// let arr2=[]

// for(let i=0;i<arr.length;i++){

//     for(var j=i+1;j<arr.length;j++){

//         if(arr[i]==arr[j]){
//             arr2=arr[j];

//         }
//     }
// }
// console.log(arr2);
// program to remove duplicate value from an array

function arr(arrp1){

    // removing duplicate
    let uniqueArr = [...new Set(arrp1)];
    
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
arr(array);