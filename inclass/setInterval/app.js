// console.log("working");

var move = () => {
var box = document.getElementById("box");
var pos = 0;

var id = setInterval(frame, 5);
var i = 0;
let iLeft = 0; 
let iRight = 300;
let iBottom = 300;


function frame(){
    if (i <= 300){
    i++;     
    pos ++;
    box.style.marginLeft = pos  + "px";}

else if(iLeft <= 300){
    iLeft++; 
    
    box.style.marginTop = iLeft + "px";
    }
else if(iRight >= 0){      
    iRight--; 

box.style.marginLeft = --iRight  + "px";

 }
 else if (iBottom >= 0){
    iBottom--; 

box.style.marginTop = --iBottom + 'px';
 }
 else{
     clearInterval(id);
 }
} 
 }
