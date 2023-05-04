

//Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// function removeFirstOccurrence(str, searchstr)       {
// 	var index = str.indexOf(searchstr);
//     // console.log(index)
// 	if (index === -1) {
// 		return str;
// 	}
// 	return str.slice(0, index) + str.slice(index + searchstr.length);
// }

// console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));


//second method using replace;

// function repl(sentance,dlt){
//     let d = sentance.replace(dlt,"")
//    return d;   
// }
// console.log(repl("The quick brown fox jumps over the lazy dog","the"))