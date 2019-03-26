// step 1 get two numbers values in inputs put in variables
// GET ELEMENT BY ID 
// 2 BUILD A FUNCTION TO DO THE MATH
// 
//  STEP 3 WINDOW ALERT TO GIVE ANSWER 

// 
var a;
var b;
var c;
var z;


var setValues = () => {
    a = Number(document.getElementById("spot1").value);
    b = Number(document.getElementById("spot2").value);
    c = Number(document.getElementById("spot11").value);
    
}

var math = () => {
setValues();
z = a + b;
document.getElementById('display').value = z;


}

var a2;
var b2;
var c2;
var z2;

var setValuesTwo = () => {
    a2 = Number(document.getElementById("spot3").value);
    b2 = Number(document.getElementById("spot4").value);
    c2 = Number(document.getElementById("spot33").value);
    
}

var mathTwo = () => {
    setValuesTwo();
    z2 = a2 - b2 - c2; 
    window.alert(z2)
    
    }

    var a3;
    var b3;
    var c3;
    var z3;

    var setValuesThree = () => {
        a3 = Number(document.getElementById("spot5").value);
        b3 = Number(document.getElementById("spot6").value);
        c3 = Number(document.getElementById("spot55").value);
    }
    
    var mathThree = () => {
        setValuesThree();
        z3 = a3 * b3 * c3;
        window.alert(z3)
        
        }


        var a4;
        var b4;
        var c4
        var z4;
    
        var setValuesFour = () => {
            a4 = Number(document.getElementById("spot7").value);
            b4 = Number(document.getElementById("spot8").value);
            c4 = Number(document.getElementById("spot77").value);
            
        }
        
        var mathFour = () => {
            setValuesFour();
            z4 = a4 / b4 / c4;
            window.alert(z4)
            
            }