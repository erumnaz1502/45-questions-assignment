let countriesToVisit: string [] = ["South Korea" , "China" ,"Australia" , "Malaysia" , "France"];

//array of countries to vist and to print
console.log("Orginal Order:", countriesToVisit);

// print array of countries in alphabatical order  without modification of orginal order
console.log("Alphabatical Order:", [...countriesToVisit].sort());

//array in still in its orginal order
console.log("Still in Orginal Order:", countriesToVisit);

//array in reverse alphabatical order without altering orginal array.
console.log("Reverse Order:", [...countriesToVisit].reverse());

//array is still in its orginal order
console.log("Still in orginal order:", countriesToVisit);

//orginal order changed
console.log("Orginal array reversed:", countriesToVisit.reverse());

//  again to orginal order
console.log("back to orginal order:", countriesToVisit.reverse());

// array changed to alphabetical order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//orginal order changed again
console.log("Orginal array reversed again:", countriesToVisit.reverse());