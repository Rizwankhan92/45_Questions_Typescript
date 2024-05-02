// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
{
    var magician = ["Alice", "Bob", "David"];
    function make_great(magician) {
        for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
            var magicians = magician_1[_i];
            console.log(magicians);
        }
    }
    function show_magicians(magician) {
        for (var i = 0; i < magician.length; i++) {
            console.log((magician[i] = magician[i] + " The Great"));
        }
    }
    make_great(magician);
    show_magicians(magician);
}
