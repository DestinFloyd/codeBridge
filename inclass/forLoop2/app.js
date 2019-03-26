var count;
for (let i = 1; i < 101; i++ ) {
   if( i % 5 === 0){
       console.log(i);
       i = i++;
   }
}
console.log("working")

let i = 0;
while (i <= 200) {
    console.log(i);
    i ++;
    if (i % 5 == 0){
        console.log("this is the 5th iteration")
    }
}

