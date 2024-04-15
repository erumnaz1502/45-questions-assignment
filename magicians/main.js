//define a function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//an arry containing magicians name
var magician_names = ["Adi", "Harry", "Mike"];
// call the function
show_magicians(magician_names);
