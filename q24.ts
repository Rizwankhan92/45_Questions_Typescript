// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let fruit1 = "Mango";
let fruit2 = "mango";
if (fruit1 == fruit2) {
  console.log("True");
} else {
  console.log("False");
}

console.log("MANGO".toLowerCase() == "mango");

console.log(10 < 5);
console.log(5 > 3);

console.log(true && false);
console.log(true || false);

let computers: string[] = ["Dell", "HP", "Samsung"];
console.log(computers.indexOf("Samsung") !== -1);
console.log(computers.indexOf("Macbook") !== -1);

console.log(!computers.indexOf("Macbook"));
