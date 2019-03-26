// console.log("working");
//  create the array of images 1

var allPics = ["images/a1.jpeg", "images/a2.jpeg", "images/a2.jpeg" ];

//  images length is the last image in the array Length - 1;
//  vurrent pic calls 1st item in array if at zero or it calls whatever position in the array you are in.

var imagesLength = allPics.length-1;
var currentPic = 0;


//  made a function and changed both buttons to run this function on click
//  button fucntion call given a 1 for positive/forward and -1 for back;

//  giving the pic an id of 'pic' so we can call it. 

//  now a conditional (if statement) if source # is over length of array (an earleir declared variable)
//  then reset it to 0

var changePic = (dog) => {
console.log(dog);
currentPic += dog;
document.getElementById("pic").src = allPics[currentPic];

if(currentPic > imagesLength){
currentPic = 0;
}
if(currentPic < 0){
    currentPic = imagesLength;
}
 }


