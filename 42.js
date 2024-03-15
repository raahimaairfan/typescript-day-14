/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
// Define an array of magicians
var magicians = ["Merlin", "Gandalf", "Harry Potter"];
// Function to modify magicians array by adding "the Great" to each magician's name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Function to display magicians
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
make_great(magicians);
show_magician(magicians);
