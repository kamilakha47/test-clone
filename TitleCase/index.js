// using slice()
// function titleCase(str) {
//     return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }

// using replace()
function titleCase(str) {
    return str.toLowerCase().split(" ").map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase())).join(" ");
}
titleCase("I'm a little tea pot");