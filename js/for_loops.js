//Create a function named showMultiplicationTable
// that accepts a number and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)




function showMultiplicationTable(x) {
    for (let y = 0; y < 10; y++) {
        console.log(x+ " x " + y + "=" + (x * y));
    }
}
    showMultiplicationTable(7)

//Use a for loop and the code from the previous lessons to generate 10
// random numbers between 20 and 200 and output to the console whether
// each number is odd or even. For example:

function randomNumber() {
    for (let Num = 0; Num < 10; Num++) {
        var ranNum = Math.ceil(Math.random()* 100) +10;
        if (ranNum % 2 === 0)
        {
            console.log("This number is even" + ranNum);
        }else{
            console.log("This number is odd" + ranNum);
        }
    }
}
    randomNumber();

//Create a for loop that uses console.log to create the output shown below

function tree() {
    for(let x=1; x<10; x++) {

        var number="";
        number=x;
        for( let y = 1; y<x;y++) {
            number = number + x.toString();
        }
        console.log(number.toString() );

        }
    }
tree();

//Create a for loop that uses console.log to create the output shown below.

for (let index = 100; index >= 0; index = (index - 5)) {
    console.log(index);
}