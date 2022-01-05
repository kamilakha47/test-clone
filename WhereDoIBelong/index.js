// using findIndex()
// function getIndexToIns(arr, num) {
//     // sorting array
//     // findIndex
//     let result = arr.sort((a, b) => a - b).findIndex(item => item >= num)
//     return result === -1 ? arr.length : result;
// }

// using for..loop
// function getIndexToIns(arr, num) {
//     arr.sort((a, b) => a - b)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= num)
//         return i
//     }
//     return arr.length
// }

// using filter()
function getIndexToIns(arr, num) {
    return arr.filter(item => num > item).length;
}

// using concat + indexOf
function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a - b).indexOf(num);
}

getIndexToIns([2, 5, 10], 1);