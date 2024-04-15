//define a function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//an arry containing magicians name
var magician_names = ["Adi", "Harry", "Mike"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
