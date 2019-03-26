//mission. make a cash register that tell you how much change to give back
//and what units of money to give 



// were going to make a big object named Denominations, 
// then were going to make an object in all of them for each money unit
// then were giving each money unit a place for 'number due back' and a
// string for singular and string for plural

let denominations = {
    numOf100: { give: 0, plural: " 100 dollar bills", singular: " 100 dollar bill" },
    numOf50: { give: 0, plural: " 50 dollar bills", singular: " 50 dollar bill" },
    numOf20: { give: 0, plural: " 20 dollar bills", singular: " 20 dollar bill" },
    numOf10: { give: 0, plural: " 10 dollar bills", singular: " 10 dollar bill" },
    numOf5: { give: 0, plural: " 5 dollar bills", singular: " 5 dollar bill" },
    numOf1: { give: 0, plural: " 1 dollar bills", singular: " 1 dollar bill" },
    numOfQuarter: { give: 0, plural: " quarters", singular: " quarter" },
    numOfDimes: { give: 0, plural: " dimes", singular: " dime" },
    numOfNickles: { give: 0, plural: " nickles", singular: " nickle" },
    numOfPennies: { give: 0, plural: " pennies", singular: " penny" }
};
 
// declaring our variable globably
let price;
let cost;
let moneyGiven;

// starting a function that has two parameters( moneyGiven and cost)
//when it subtracts them it will go into a variable neamed change
// were making this a function so it can be reused as many times as we 
// want to without rewriting rules
let changeBack = (moneyGiven, cost) => {
    let change;
    change = (moneyGiven - cost)
    console.log(change)
//   now we have the amount due back and printed that


// now we are going to take the change and give back the big bills
// first. when we give back a bill we have to subtract that value from
// the change 
// we are on the next line going to put the number of times we need the bill
// into our above box give. to tell the computer where that box is we start by
// telling it look in the biggest object - denominations. then look in num of 100.
// then in the give box add 1
// we repeat this for every money unit....

    while (change >= 100) {
        change -= 100;
        denominations.numOf100.give++;
    }
    // 100's
    while (change >= 50) {
        change -= 50;
        denominations.numOf50.give++;
    }
    // 50's
    while (change >= 20) {
        change -= 20;
        denominations.numOf20.give++;
    }
    // 20's
    while (change >= 10) {
        change -= 10;
        denominations.numOf10.give++;
    }
    // 10's   
    while (change >= 5) {
        change -= 5;
        denominations.numOf5.give++;
    }
    //5's        
    while (change >= 1) {
        change -= 1;
        denominations.numOf1.give++;
    }
    //1's           
    while (change >= .25) {
        change -= 0.25;
        denominations.numOfQuarter.give++;
    }
    //0.25
    while (change >= .10) {
        change -= 0.10;
        denominations.numOfDimes.give++;
    }
    //0.10
    while (change >= .05) {
        change -= 0.05;
        denominations.numOfNickles.give++;
    }
    //0.05
    while (change >= .005) {
        denominations.numOfPennies.give++;
        change -= .01;
    }
// now we want the machine to say what we owe back. but console.logging the whole 
// object denominatiosn will be hard to read and it will be big and abnormally spaced
// so 
//were gonna make a " for - in" statement that will sort 
// through objects of different names in the same object(big box denominations)
// "for -in" statements run through a whole object looking for the 
// parameters you put in


//were also adding an if statement(into our "for -in") bc english has different words for 
// plurals and if would sound wrong to say "1 100 dollar billS" and vice versa 
// and telling it to print and where from 

    for (let value in denominations) {
        if (denominations[value].give > 1)
            console.log(`${denominations[value].give}` + `${denominations[value].plural}`);
    
        else if(denominations[value].give == 1 )
        console.log(`${ denominations[value].give}` + `${denominations[value].singular}`);
    }
}

// gonna call our function to assess it
changeBack(1265, 779.53);

// YAY :)

