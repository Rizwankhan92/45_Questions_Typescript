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
    var invitation = ["Rizwan", "Yasir", "Noman"];
    console.log("Hello, ".concat(invitation[1], ", You are Not Invited, beacause you are a hard eater"));
    invitation[1] = "Haider";
    for (var _i = 0, invitation_1 = invitation; _i < invitation_1.length; _i++) {
        var invite = invitation_1[_i];
        console.log("Hello, ".concat(invite, ", You are invited for Dinner with your family"));
    }
}
