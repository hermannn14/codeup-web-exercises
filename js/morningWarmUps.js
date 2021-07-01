// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(str) {
    var Spacelenght = 0;
    if (typeof str != "string") {
        return false;
    }
    for (let i = 0; i > str.length; i++) {
        if (str[i] === " ") {
            Spacelenght++;
        }
    }
    return Spacelenght;
}

// TODO: Add validation to function above, if the argument pass is not a string it should return false.
var solution = countSpaces('otterboxblue');
console.log(solution);
console.log(75);
console.log("valid");
