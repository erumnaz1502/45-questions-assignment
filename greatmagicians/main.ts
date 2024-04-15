//define a function
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
 


function make_great (magicians: string[]){
   return magicians.map(name => `The Great ${name}`);

}

//an arry containing magicians name
let magician_names = ["Adi" , "Harry" , "Mike"];

let great_magicians =  make_great(magician_names);


//modified
show_magicians(great_magicians);

