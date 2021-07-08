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
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function () {
        return (this.firstName + " " + this.lastName)
    }

}
console.log(personOne.getFullName());
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function () {
        return (this.firstName[0].toUpperCase + this.firstName.slice(1) + " " + this.lastName[0].toUpperCase + this.lastName.slice(1))
    }
}
console.log(personTwo.getNicelyFormattedFullName)
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    intro: function () {
        return ("Hello, My name is" + personThree.getNicelyFormattedFullName + "and I am" + this.ageInYears)
    }
}


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function StringObjects(stringarray) {
    var arrayItems = []

    for (let i = 0; i < stringarray.length; i++) {
        console.log(stringarray[i])
        arrayItems.push ({originalString:stringarray[i], lengthOfOriginalString:stringarray[i].length})
    }
    return items;
}
console.log(StringObjects(["hello", "dave"]))

// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne, personTwo, personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//