// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

{
  let invitation = ["Rizwan", "Yasir", "Noman"];
  console.log(
    `Hello, ${invitation[1]}, You are Not Invited, beacause you are a hard eater`
  );

  invitation[1] = "Haider";

  for (let invite of invitation) {
    console.log(
      `Hello, ${invite}, You are invited for Dinner with your family`
    );
  }
}
