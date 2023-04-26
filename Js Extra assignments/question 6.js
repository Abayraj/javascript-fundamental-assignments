//Write a function to find the second largest number in a array]
let arr=[2,30,4,50]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log("sorted array desending order"+arr);

console.log("second largest element in array "+arr[1]);
