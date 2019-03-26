// console.log("working");

// down 225, 
// right 75
// down 50
// left 50
// down 50
// right 300
// up 50
// rigth 50
// up 150
// left 50
// up 50
// right 150 
// down 50
// right 50 
// up 50
// right 200
// down 50
// left 50
// down 150
// left 50
// down 50 
// right 150
// down 25


function play(){
    console.log("working");

var ball = document.getElementById("ball");


var id = setInterval(frame, 5);
var pos = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l= 0;

function frame(){ 
    if(a < 225){
        pos++;
    a++;
    ball.style.marginTop = +(a) + "px";
}
  else if (b < 70){
      pos++;
  b ++;
  ball.style.marginLeft = +(b) + "px";

    }
  else if(c < 75){
    pos++;
      c ++;
      ball.style.marginTop = +( c) + "px";
  }
  else if(d < 100){
    pos ++;  
    d ++; 
      ball.style.marginLeft = -( d) + "px";
        
  }
  else if(e < 770){
      pos ++;
      e ++;
      ball.style.marginTop = ++ e + "px";   
  }

      else if (pos > 600){
          pos ++;}
          else{
      clearInterval(id);
      }

  }
  }













// console.log("working");
// function play(){
//     console.log("working");

// var ball = document.getElementById("ball");


// var id = setInterval(frame, 5);
// var pos = 0;
// var iLeft = 0;
// var iRight = 0;
// var iDown = 0;
// var iUp = 0;


// function frame(){ 
//     if(iDown <= 225){
//     iDown ++;
//     ball.style.marginTop = iDown + "px";}
//     else if (iRight <= 70){
//   iRight ++;
//   ball.style.marginLeft = iRight + "px";
//     }
//   else if(iDown <= 300){
//       iDown ++;
    
//       ball.style.marginTop = iDown + "px";
//   }
//   else if(iRight >=0){
//       iRight--; 
//       ball.style.margin = --iRight + "px";
//       console.log(iDown);  
//   }
//   else if(iDown <= 350){
//       console.log(iDown);
//       iDown ++;
//       ball.style.marginTop = iDown + "px";   
//   }
  
  
//       else{
//       clearInterval(id);
//       }
//   }
//   }