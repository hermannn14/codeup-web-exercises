// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(str) {
    var Spacelenght = 0;

    if (typeof str != "string") {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            Spacelenght++;
        }
    }
    return Spacelenght;
}

// TODO: Add validation to function above, if the argument pass is not a string it should return false.
var solution = countSpaces('otterboxblue');
console.log(solution);
var solution = countSpaces(" mama I made it !")
console.log(solution);

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.

function capitalizeAllNames([]) {
    var names = ["Jean", "jacques", "rousseau"];
    return (names.toUpperCase);
}
var names = ["Jean", "jacques", "rousseau"]
console.log(names.toUpperCase);
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// function capitalizeFirstLetter([]) {
//     var
// }

//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]


// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
function getFullName() {
    var personOne = {
        firstName: "silvia",
        lastName: "floopertan",
        ageInYears: 34,
        heightInInches: 65
    }
    return (personOne.firstName + " " + personOne.lastName)
}
console.log(getFullName());
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
function getNicelyFormattedFullName(value) {
    var personTwo = {
        firstName: "dan",
        lastName: "valdarez",
        ageInYears: 61,
        heightInInches: 73
    }
    return (value[0].toUpperCase(personTwo.firstName) + " " + value[0].toUpperCase(personTwo.lastName))
}
console.log(getNicelyFormattedFullName(value))
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}