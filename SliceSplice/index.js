// function frankenSplice(arr1, arr2, n) {
//     // a[0],...,a[n]
//     let result = [];
//     arr2.map((item, i) => {
//         if (i === n) {
//             result.push(...arr1)
//         }
//         result.push(item);
//     })
//     return result.length > 0 ? result : [...arr1];
//}

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i])
        n++
    }
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);