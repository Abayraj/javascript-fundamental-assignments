//Write a program to find the union of two arrays of integers.
const num1=[4,9,5];
const num2=[9,4,9,8,4];

const getUnion = () =>{
    let oneArr =[...num1,...num2]
   return [...new Set(oneArr)]
}
console.log(getUnion());
