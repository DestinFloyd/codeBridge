// console.log("working");

// write and fill array
var colors = ["blue", "red", "yellow", "green", "violet", "silver", "pink", ];
var food = ["pasta", "rice", "criossants", "macNcheese", "apples"];

// now write the length into the dom. Bam concationate

// document.write("the length of this array is " + colors.length);

// // arrays start from 0 
// // the last element in an array is always ARRAYNAME.length-1;

// document.write(colors[colors.length-1])
// // returns pink



// // to acces array values

// document.write(colors[1]);
// //returns  red aka index 1

// returns array in an array
// document.write(colors[0][3]);
// // outputs e( index 0 -  spot 3 AKA index 4 because letter b = 0)

// // making a for loop to access all elements
// // globally scoped variable 

// // makes all elements in an array print
// for(let counter = 0; counter < food.length; counter++){
//     document.write(food[counter] + "<br>");
// }
// //makes all elements in an array + a number first
// for(let counter = 0; counter < food.length; counter++){
//     document.write( counter + food[counter] + "<br>");
// }

// write forst 3 elemnts in array. 
// PS throw a + "<br"
var nycBoroughs = ["Queens", "Brooklyn", "Manhattan", "Bronx"];

// for( let i = 0; i <= 2; i ++){
//     document.write(nycBoroughs[i]);
// }


// // change an item in an array
// // nycBoroughs[2] = "Staten Island";

// // for( let i = 0; i <= 2; i ++){
// //  document.write(nycBoroughs[i]);
// // }

// //array.push() adds to a last item in an array
// nycBoroughs.push("Staten Island");


// //  array.pop() removes last item in the array;
// nycBoroughs.pop();

// while loop tp resverse an array order;
// counter = 0;
// var newArray= [];
// while(nycBoroughs.length > 0){
// newArray.push(nycBoroughs.pop());
// counter--;
// }
// document.write(newArray);


// making nested arrays with our other arrays
// 
var nestedArray = [colors, food];
console.log(nestedArray)
//output array : 2 and //

var counter= 0;
for (counter = 0; counter < nestedArray.length; counter++) {
    document.write(nestedArray[counter] + "<br>");
}

