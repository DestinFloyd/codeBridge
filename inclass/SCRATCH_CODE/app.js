console.log("working");
////////////////// length of b minus the end of a
function checkEnding(str1, str2) {
	var a = str1.length-1;
	var b = str2.length-1;	
	var c = str1[b];
	var d = "";
	var e;
	var f;

	for( let i = b; i <= 0; i++){
		d += str1[i];
		
	}	
	e = d.split();
    f = e.reverse();
    console.log(e);
}

//Test.assertEquals(checkEnding("abc", "bc"), true);
//Test.assertEquals(checkEnding("abc", "d"), false);

console.log(checkEnding("abc", "bc"));
console.log(checkEnding("abc", "d"));