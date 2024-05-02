// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

{
  function make_shirt(
    size: string = "Extra Large",
    message: string = "Apna Time Aega"
  ) {
    console.log(`A t-shirt size is: ${size} with the message is: ${message}`);
  }
  make_shirt();
  make_shirt("Medium");
  make_shirt("Extra Small", "You Can Do it");
}
