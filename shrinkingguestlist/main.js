"use strict";
// guestlist array
let guestList = ["Jennie", "Jisoo", "Annie"];
// print the name of guest who cannot come
console.log(`${guestList[0]} can't make it to dinner.`);
//replaced guest name
guestList[0] = "Aiyra";
// message print for bigger table
console.log("Good News ! I have found a bigger table.");
// Adding a new guest name at starting index of array
guestList.unshift("Aoora");
// adding a new guest name at ending index of array
guestList.push("Jackson");
//get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "jungkook");
// print message of updated list
console.log("updated list of guest");
//sending invitation message to guests one by one
guestList.forEach(guest => console.log(`Dear ${guest}, would you like to dinner with me?`));
//invited two people forward for dinner
console.log("Unfortunately, the new dinner table won't arrive at time, so i can only invite two guest for dinner with me.");
//using wireloop to remove guests from array until two guests remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry,${removedGuest} I can't invite you to dinner.`);
}
// sending invitation to last two guests
console.log("invitation to the last 2 guests");
guestList.forEach(lasttwo => console.log(`Fortunately ${lasttwo}, you are still invited to dinner.`));
// removing last two guests from list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
