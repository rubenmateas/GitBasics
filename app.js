// Fizz

/*
Loops from 1 - 300 logging each number except for those that are divisable
by 5 or 7. Numbers divisable by 5 are replaced with Fizz, numbers divisable by
7 are replaced by Fuzz.
*/

for (var i = 1; i <= 300; i++) {
  if(i%5 === 0){
    console.log("Fizz");
  }else if(i%7 === 0){
    console.log("Fuzz");
  }else{
    console.log(i);
  }
}

// FizzFuzz

/*
Loops from 1 - 300 logging each number exceot those that are divisable by 3 and
5. Numbers divisable by 3 and 5 are replaced by FizzFuzz.
*/
for (var i = 1; i <= 300; i++) {
  if(i%3 === 0 && i%5 === 0){
    console.log("FizzFuzz");
  }else{
    console.log(i);
  }
}

// Triangle

/*
Creates a triagle by slicing off the last # of tri each time that it loops.
*/

var tri = "#######";
var num = tri.length;
for (var i = 0; i < num; i++) {
  console.log(tri);
  tri = tri.slice(0, -1);
}
