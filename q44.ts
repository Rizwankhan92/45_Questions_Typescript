// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with ${items}.`);
}
make_sandwich("Bread", "Tomato");
make_sandwich("Egg", "Chicken", "Ketchup");
make_sandwich("Mayo", "Garlic", "Mustard", "Fries Potato");
