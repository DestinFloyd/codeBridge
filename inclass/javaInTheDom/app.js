// 
// console.log("working");
// globbaly declare a variable 
// makinga a function 
var rabbit;
// step 1 function ES6 form;

var change =  () => {
    //  take out global var and
    //  assisgn it the value of whatever 
    //  html element we want to change

}
//  used .innerHTML to make changes to an ID html
var dog;
    var swatch = () => { 
dog = document.getElementById("miles");
dog.innerHTML = "This is a change";
    }


//  use . get element by TAG NAME
var changeTag = () => {
    var cat = document.getElementsByTagName("h1");
    console.log(cat);
    cat.innerHTML = "this is a new cat"
}

// window.alert()
var windowAlert =() => {
    window.alert("this is cool")

}

//  this will be document.write


var documentWrite = ()  => {
    document.write("this is writing to the document");
}

//  doing math with a window alert
var math = () => {
var x = 5;
var y = 5;
var z = ( x + y);
window.alert(z);

}

// on click 
//on mouse over 
//on load 
//on key down
