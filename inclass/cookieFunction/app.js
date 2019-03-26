// we are going to make a two argument function
// named changeBack argument 1 will be money given
// argument 2 will be the cost of the item

// let numOf100 = []
// let numOf50 = 0
// let numOf20 = 0
// let numOf10 = 0
// let numOf5 = 0
// let numOf1= 0
// let numOfQuarter = 0
// let numOfNickles = 0
// let numOfDimes = 0
// let numOfPennies = 0

let price;
let cost;
let moneyGiven;
let changeBack = (moneyGiven, cost) => {
    let change;
    change = (moneyGiven - cost)
    console.log(change)
    //   now we have the amount due back and printed that
    while (change >= 100){
        change -= 100;
        console.log("give a 100");
    }
    // 100's
    while (change >= 50) {
        change -= 50;
        console.log("give a 50");
    }
    // 50's
    while (change >= 20) {
        change -= 20;
        console.log("give a 20");
    }
    // 20's
    while (change >= 10) {
        change -= 10;
        console.log("give a 10");
    }
    // 10's   
    while (change >= 5) {
        change -= 5;
        console.log("give a 5");
    }
    //5's        
    while (change >= 1) {
        change -= 1;
        console.log("give a 1");
    }
    //1's           
    while (change >= .25) {
        change -= 0.25;
        console.log("give a quarter");
    }
    //0.25
    while (change >= .10) {
        change -= 0.10;
        console.log("give a dime");
    }
    //0.10
    while (change >= .05) {
        change -= 0.05;
        console.log("give a nickle");
    }
    //0.05
    while (change >= .005) {
        console.log("give a penny");
        change -= .01;
    }
    //0.01
}

// gonna call our function to assess it
changeBack(340, 23.11);



// while (change >= 100) {
//     change -= 100; 
//     numOf100 ++;
//     if(numOf100 > 0){
//     console.log(numOf100);}
// }