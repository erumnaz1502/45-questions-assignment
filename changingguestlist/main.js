var guestList = ["Jennie", "Jisoo", "Annie"];
console.log("".concat(guestList[0], " can't make it to dinner."));
guestList[0] = "Aiyra";
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
