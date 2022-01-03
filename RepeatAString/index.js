// First approach using for..loop
function repeatStringnNumTimes(str, num) {
    if (num <= 0) {
        return "";
    }

    let repeatWord = str;
    for (let i=1; i < num; i++) {
        repeatWord += str;
    }

    return repeatWord;
 }
repeatStringnNumTimes("abc", 3)

// Second approach using while..lop
// function repeatStringnNumTimes(str, num) {
//     let repeatWord = "";

//     while (num > 0) {
//         repeatWord += str;
//         num--
//     }

//     return repeatWord;
// }

// Third approach using recursive
// function repeatStringnNumTimes(str, num) {
//     if (num < 1) {
//         return "";
//     } else {
//         return str + repeatStringnNumTimes(str, num-1);
//     }
// }

// Forth approach using recursive one line
// function repeatStringnNumTimes(str, num) {
//     return num > 0 ? str + repeatStringnNumTimes(str, num-1) : "";
// }