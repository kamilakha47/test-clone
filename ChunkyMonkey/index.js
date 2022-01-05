// Using slice() and splice()
// function chunkArrayInGroups(arr, size) {
//     let combine = []
//     let count = arr.length / size;

//     for (let i = 0; i < count; i++) {
//         combine.push(arr.slice(0, size))
//         arr.splice(0, size);
//     }
//     return combine;
// }

// function chunkArrayInGroups(arr, size) {
//    let temp = [];
//    let result = [];
//    for (let i = 0; i < arr.length; i++) {
//        if (i % size !== size - 1) temp.push(arr[i]);
//        else {
//            temp.push(arr[i]);
//            result.push(temp);
//            temp = [];
//        }
//    }

//    if(temp.length !== 0) result.push(temp);
//    return result;
// }

// Using for..loop
// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//         newArr.push(arr.slice(i, i + size));
//     }

//     return newArr;
// }

// Using while
// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     let i = 0;

//     while (i < arr.length) {
//         newArr.push(arr.slice(i, i + size))
//         i += size;
//     }

//     return newArr;
// }

// Using while
function chunkArrayInGroups(arr, size) {
    let newArr = [];

    while (arr.length > 0) {
        newArr.push(arr.splice(0,size))
    }

    return newArr;
}

// Using recursive + concat
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr]
    } else {
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size), size))
    };
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

