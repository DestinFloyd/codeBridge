// console.log("working");

// // step 1 created a fucntion to add new avengers
// // step 2 assigned a variable to the creation of a new li (line 8)
// // took new item and gave it text content(AS A STRING)
// //grabbed the whole list and append child it to add that new member to the list
// var AddAvenger = () => {
// var newMember = document.createElement('li');
// newMember.textContent = ('Captain America');
// document.getElementById("theAvengersList").appendChild(newMember);
// }

// making an input field

function AddAvenger(){
    var newHero = document.getElementById("newHero").value;
    var newMember = document.createElement('li');
    newMember.textContent = (newHero);
    document.getElementById('theAvengersList').appendChild(newMember);
}

var deleteAvenger = () => {
    var list = document.querySelector('ul');
    var Dog = $('li').length;
    console.log(Dog);
    var lastItem = document.querySelector('li');
    list.removeChild(lastItem);


}
