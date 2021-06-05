'use strict';

//alert(*break and and continue*);

var oddNumber;

while (true) {
    oddNumber = parseInt(prompt("Enter any odd number between 1 and 50"));
    if (oddNumber % 2 != 0) {
        break;
    }
}


for (let index = 0; index < 50; index++) {
    if (index == oddNumber) {
        console.log("Yikes! Skipping number:  " + index);
        continue
    }
    if (index %2 !=0) {
        console.log("Here is an odd number: " + index);
    }
}


var oddnumber;
oddnumber=prompt("What is your number:" + oddnumber);
for (var index = 0; index<= 50;index++) {

    if (index === Number(oddnumber)) {
        console.log("Yikes! You missed " + oddnumber);
        continue;
    }
    if (index % 2 !== 0) {
    console.log("This is an odd number," + index);
    }
}