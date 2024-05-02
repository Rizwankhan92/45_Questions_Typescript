// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

{
  let invitation = ["Rizwan", "Khizar", "Adnan", "Noman", "Mohsin", "Yousuf"];

  for (let invite of invitation) {
    console.log(`Hello ${invite}, you are invited of dinner on wednesday`);
  }
  console.log("OpPpSs I am sorry! i can invite only two people for dinner");

  while (invitation.length > 2) {
    let removeGuest = invitation.pop();

    if (removeGuest) {
      console.log(
        `Sorry! ${removeGuest}, we cannot invite you to dinner anymore, we apologize for any inconvinence `
      );
    }
  }
  console.log("The remaining guest are invited.......!");
  for (let guest of invitation) {
    console.log(`${guest}, You are albolutely invited`);
  }

  console.log("I am sorry the dinner is canceled");

  while (invitation.length > 5) {
    let allGuestRemove = invitation.pop();
    if (allGuestRemove) {
      console.log(`Sorry! ${allGuestRemove} The dinner is canceled`);
    }
  }
}
