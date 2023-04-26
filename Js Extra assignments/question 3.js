// Write a function to sort a array in ascending order
// let=myarray=[1,4,7,2]
// myarray.sort();
// console.log(myarray)
let myarray=[30,2,1,4,5];
let swap;

for(let i=0; i < myarray.length; i++){
    for(let j=i+1; j < myarray.length;j++){
        if(myarray[i]>myarray[j]){

            swap=myarray[i];
            myarray[i]=myarray[j];
            myarray[j]=swap;
        }

    }
     
}
console.log(myarray);
