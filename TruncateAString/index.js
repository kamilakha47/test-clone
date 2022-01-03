
// Strings are immutable in JavaScript so we will need a new variable 
// to store the truncated string.

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
