// /*let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth'
//   };
//   let greenEnergy = obj => {
//     obj['Fuel Type'] = 'avocado oil';
//   }
//   let remotelyDisable = obj => {
//     obj.disabled = true;
//   }
//   greenEnergy(spaceship);
//   remotelyDisable(spaceship);
//   console.log(spaceship)

// 2/10 JS lesson8
//   ====================================*/



// // Write your code below

// // for (let crewMember in spaceship.crew) {
// //     console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// // };

// // for (let crewMember in spaceship.crew) {
// //     if (spaceship.crew[crewMember].name > 50 ) {
// //     console.log(`${spaceship.crew[crewMember].name}` + "100 dollar bills")
// //     }else if (spaceship.crew[crewMember].name == 50 )
// //     {console.log(`${spaceship.crew[crewMember].name}` + "100 dollar bill")}
// //     // console.log(`${crewMember}:`)
// // };

// // while (change >= 100) {
// //     change -= 100; 
// //     numOf100 ++;
// //     if(numOf100 > 0){
// //     console.log(numOf100);}
// // }
// // var faveThings=[3 + " games" ,"money", 
// // "skateboards","cloths","make up",
// // "anime","shoes"
// // ];
// // for (let i = 0; i <=6 ; i++) {
// //     console.log(faveThings[i]);
// // }


// // for (let crewMember in spaceship.crew) {
// //     if ( spaceship.crew[crewMember].name > 50)
// //      console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// //  };
// // ========================me
// // let testt = {'cats', 'cats' , 'dogs': "D"}
// // 

// //  var o = {a:5, b:9, c:2};
// //  var ol = Object.keys(o);
// //  ol
// //  ["a", "b", "c"]
// // ol.length
// // 3

// // let numOf100 = { hug:0, plural: " 100 dollar bills", singular: " 100 dollar bill", bug:0, plurals: " 100 dollar bills", sidngular: " 100 dollar bill"  }

// // // let newItem =  
// // console.log(Object.keys(numOf100).length)

// // console.log({ol.length})

// // function arrayBuilder() {
// //     // your code here...

// //     i = 0;
// //         var tree = Object.size;
// //         var DOGGIE = [];
// //     while(i <= tree){

// //    Object.getOwnPropertyNames(i);
// //     DOGGIE.push(Object.getOwnPropertyNames(i) = 0); 
// //     i ++;}
// //     console.log(tree)
// //     console.log(DOGGIE); 
// // }


// // arrayBuilder(testt);

// // Object.getOwnPropertyNames(person)


// // // // obj.hasOwnProperty(key)

// // // //   //Comment in the code below to test your function:

// //   // console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// // console.log(arrayBuilder({})); //=> []
// //   Object.size = 


// // Get the size of an object
// // var size = Object.size(myArray);
// //   let spaceship = {
// //     crew: {
// //         captain: {
// //             name: 49,
// //             degree: 'Computer Engineering',
// //             cheerTeam() { console.log('You got this!') }
// //         },
// //         'chief officer': {
// //             name: 55,
// //             degree: 'Aerospace Engineering',
// //             agree() { console.log('I agree, captain!') }
// //         },
// //         medic: {
// //             name: 50,
// //             degree: 'Physics',
// //             announce() { console.log(`Jets on!`) }
// //         },
// //         translator: {
// //             name: 56,
// //             degree: 'Conservation Science',
// //             powerFuel() { console.log('The tank is full!') }
// //         }
// //     }
// // };
// // arrayBuilder(spaceship)

// // var person = {
// //     [Symbol('name')]: 'John Doe',
// //     [Symbol('age')]: 33,
// //     "occupation": "Programmer"
// //   };

// //   const propOwn = Object.getOwnPropertyNames(person);
// //   console.log(propOwn.length); // 1

// //   let propSymb = Object.getOwnPropertySymbols(person);
// //   console.log(propSymb.length); 


// /*Write a function arrayBuilder that takes in a count 
// object and returns an array filled with the appropriate 
// numbers of elements. The order of the elements in the array 
// does not matter, but repeated elements should be grouped.*/

// // let numOf100 = { hug:0, plural: " 100 dollar bills", singular: " 100 dollar bill", bug:0, plurals: " 100 dollar bills", sidngular: " 100 dollar bill"  }

// // // let newItem =  
// // console.log(Object.keys(numOf100).length)

// // let baby;
// // function arrayBuilder(baby) {

// // }
// // let numOf100 = {
// //     hug: 0, plural:  "111111 100 dollar bills",
// //     singular: " 22222222100 dollar bill", bug: 03333333, 
// //     plurals: " 444444100 dollar bills",
// //     sidngular: " 555555100 dollar bill"
// // }
// // var faveThings=["games","money", 
// // "skateboards","cloths","make up",
// // "anime","shoes", "shoes", "shoes"
// // ];
// // for (let i = 0; i <=9 ; i++) {
// //     var ruler = faveThings[i]

// //     var DOGGIE = [];
// //     DOGGIE.push([(ruler), 0]);
// //     console.log(faveThings[i]);
// //  console.log(DOGGIE)
// // }

// // for( key in numOf100 ){
// //     console.log(numOf100[key])
// // }
// // // console.log(Object.keys(numOf100).length)
// let numOf100 = {
//     hug: 0, 
//     plural:  "111111 100 dollar bills",
//     singular: " 22222222100 dollar bill", 
//     bug: 03333333, 
//     plurals: " 444444100 dollar bills",
//     sidngular: " 555555100 dollar bill"
// }
// function arrayBuilder(baby) {
//     // your code here...

//     i = 0;
//     var ruler = Object.keys(baby).length;
//     var DOGGIE = [];
//     while (i <= ruler) {
// // for( key in numOf100 ){
// //     console.log(numOf100[key])
//         // Object.getOwnPropertyNames(i);
//         for (key in baby){DOGGIE.push(baby[key])
//         // DOGGIE.push(Object.getOwnPropertyNames(i) = 0);
//         i++;
//         console.log(DOGGIE)
//     }
//     console.log(ruler)
//     console.log(DOGGIE[0]);
// }}
// // console.log(faveThings)
// // // console.log(numof100)
// arrayBuilder(numOf100)
// // now get it to print properly and to sort the array/////////////////
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(seed)
// let treeling = [];
// for (const key in seed) {

// // console.log("enetering loop")

//   if (seed.hasOwnProperty(key)) {
// // console.log("entering second loop")
//     const element = seed[key];
// // console.log(element)
//     var sapling = [];
//     sapling.push(element);
//     sapling.sort;
//     var i = 0;
//         while (i >= sapling.length) {
//         let sunlight = sapling[i];

//         treeling.push(sunlight)
//         i++;
//     }
//     console.log(treeling)
//   }

// }



function arrayBuilder(seed) {
  let treeling = [];
  for (thing in seed) {
    console.log(thing);
    for (i = 0; i < seed[thing]; i++) {
      treeling.push(thing)
    }
  }
  treeling.sort()
  console.log(treeling)
}


var solarSystem = {
  sun: 2,
  earth: 1,
  cars: 5,
}
arrayBuilder(solarSystem)



// console.log(solarSystem)
console.log('working')
// arrayBuilder(solarSystem)
//Comment in the code below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []
