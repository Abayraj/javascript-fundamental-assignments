//Write a JavaScript function to chop a string into chunks of a given length

function chopString(string,number){

    let newarray=[];
    
    for(let i=0 ; i<string.length; i += number){
        newarray.push(string.slice(i, i + number))
    };
    return newarray
}
let output = chopString("Abay",2)
console.log(output);

