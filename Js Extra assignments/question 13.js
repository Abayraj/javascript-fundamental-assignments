//write a function to check if a given number is armstrong number


// /armstromng number check
function isAmstrong(n){
    let num = n.toString();
    let len = num.length; // 3
    let output = 0;
    
    for(let i of num){
          output += parseInt(i)**len;
    }

    if(parseInt(num) == output){
          console.log('The entered number is an amstrong number');
    }
    else{
          console.log('The entered number is not an amstrong number');
    }
    
}

isAmstrong(153);
