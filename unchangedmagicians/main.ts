//define a function
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
 


function make_great (magicians: string[]){
   return magicians.map(name => `The Great ${name}`);

}

//an arry containing magicians name
let magician_names = ["Adi" , "Harry" , "Mike"];

// a copy of original array through .Slice()

let copy_magicians_names = magician_names.slice()

//modifying the copied of original array

let  copyGreatMagicians = make_great(copy_magicians_names);

// both array

//original

show_magicians(magician_names);

//copied

show_magicians(copyGreatMagicians);



