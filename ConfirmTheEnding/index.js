// Some approach

//1. using .substring()
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
}  
  
//2. using .slice()
function confirmEnding(str, target) {
    //1. Indexing str-target
    //return str.slice(str.length - target.length) === target;

    //2. Indexing -target
    return str.slice(str.length - target.length) === target;
}  

confirmEnding("Bastian", "n");