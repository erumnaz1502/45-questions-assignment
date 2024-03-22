let guestList: string [] = ["Jennie" , "Jisoo" , "Annie"];
console.log(`${guestList[0]} can't make it to dinner.`);
guestList[0] = "Aiyra";
guestList.forEach(guest=>console.log(`Dear ${guest}, you are invited to dinner.`));