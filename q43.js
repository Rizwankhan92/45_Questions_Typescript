// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
{
    var magicians = ["Alice", "David", "Chris"];
    function show_magicians(magician) {
        for (var i = 0; i < magician.length; i++) {
            console.log((magician[i] = magician[i]));
        }
    }
    function make_great(magicians) {
        var greatMagicians = [];
        magicians.forEach(function (magician) {
            greatMagicians.push("".concat(magician, " the Great"));
        });
        return greatMagicians;
    }
    var greatMagicians = make_great(magicians.slice());
    console.log("Original magicians:");
    show_magicians(magicians);
    console.log("Great magicians:");
    show_magicians(greatMagicians);
}
