function findLongestWordLength(str) {
    /* This can be solved using Array.reduce() or through looping */

    /**
     * 1) Array.reduce() + Math.max()
     */

    const arr = str.split(" ").reduce((longestWord, word) => {
        return Math.max(longestWord, word.length)
    }, 0)
    return arr;

    /**
     * 2) Looping For..
     */

    // const arr = str.split(/\s/);
    // let longestWord = arr[0].length;
    // for(let i = 0; i < arr.length; i++) {
    //   if(longestWord < arr[i].length) {
    //     longestWord = arr[i].length
    //   }
    // }
    // return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");