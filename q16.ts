// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

{
    let invitation = ["Rizwan", "Yasir", "Noman"];
    console.log(
        `Hello ${invitation[1]}, you are not invited because of you are a hard eater`
    );

    invitation[1] = "Haider"; // name replace array index 1

    invitation.unshift("Yaseen"); // add new guest at the begining of array

    invitation.splice(3, 0, "Ameen");

    invitation.push("Zaheer", "Zulqarnain"); // two more person name add in our array

    for (let invite of invitation) {
        console.log(`Hello ${invite}, you are invited of dinner`);
    }
}
