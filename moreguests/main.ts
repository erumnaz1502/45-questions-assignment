
// guestlist array
let guestList: string [] = ["Jennie" , "Jisoo" , "Annie"];

// print the name of guest who cannot come
console.log(`${guestList[0]} can't make it to dinner.`);

//replaced guest name
guestList[0] = "Aiyra"

// message print for bigger table
console.log("Good News ! I have found a bigger table.");

// Adding a new guest name at starting index of array
guestList.unshift("Aoora");

// adding a new guest name at ending index of array
guestList.push("Jackson");

//get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2 )

// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "jungkook" );

// print message of updated list
console.log("updated list of guest");

//sending invitation message to guests one by one
guestList.forEach(guest =>console.log(`Dear ${guest}, would you like to dinner with me?`));