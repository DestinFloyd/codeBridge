// console.log("working");
// object decalered with var objname = curly brackets 
// objects hings are keys
//spot 4 we made an annonomus function named profle by the key. 
//its an "anonymous function...." we dont name it. if we call 
//black panther key profile the function runs.

var blackPanther = { name: "t'challa", weapons: "claws", cause: "freedom"};
profile: function(){return "Prince" + this.name + "uses" + this.weapons + "for" + this.cause } };


// console lgging and document writing
console.log(blackPanther.name);
document.write(blackPanther.cause);


document.write(blackPanther.profile);

