// using for...lop
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return undefined;
}

// Using array.find()
// If no values satisfy the testing function, undefined is returned.
function findElement(arr, func) {
    return arr.find(func);
}


// Using map and indexing
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}


// Using recursive
function findElement(arr, func) {
    return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);