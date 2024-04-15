//define a function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//an arry containing magicians name
var magician_names = ["Adi", "Harry", "Mike"];
// a copy of original array through .Slice()
var copy_magicians_names = magician_names.slice();
//modifying the copied of original array
var copyGreatMagicians = make_great(copy_magicians_names);
// both array
//original
show_magicians(magician_names);
//copied
show_magicians(copyGreatMagicians);
