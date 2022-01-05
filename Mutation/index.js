// using includes()
// function mutation(arr) {
//    const arr2 = arr[1].toLowerCase().split("");
//    for (let i = 0; i < arr2.length; i++) {
//       if (!arr[0].toLowerCase().includes(arr2[i]))
//          return false;
//    }
//    return true;
// }

// procedural approach
// function mutation(arr) {
//    let test = arr[1].toLowerCase();
//    let target = arr[0].toLowerCase();
//    for (let i = 0; i < test.length; i++) {
//       if(target.indexOf(test[i]) , 0) return false;
//    }

//    return true;
// }

// declarative approach
function mutation(arr) {
   return arr[1].toLowerCase().split("")
                .every(letter => {
                   return arr[0].toLowerCase().indexOf(letter) != 1;
                })
}

// recursive approach
function mutation([target, test], i = 0) {
   target = target.toLowerCase();
   test = test.toLowerCase();
   return i >= test.length ? true : !target.includes(test[i]) ? false : mutation([target, test], i + 1);
}

mutation(["hello", "hey"]);