let car: string = "Honda car"
let upperCase: string = "CAR"
let num1: number = 15
let num2: number = 25
let vegetables: string[] = ["potato" , "tomato" , "raddish"]
//test for equality and unequality with strings

console.log("is car is equal to Honda car?");
console.log(car ==  "Honda car");

console.log("is car is not equal to Honda car?");
console.log(car != "Honda car");

//tests using lowercase function
console.log("Is CAR is equal to car after converting to lowercase?");
console.log(upperCase.toLowerCase() == " Honda car");


console.log(" is CAR is not equal to Honda car after converting to lowercase");
console.log(upperCase.toLowerCase() != "Honda car?");


//Numerical tests
//equal to
console.log(" Is num1 is equal to num2?");
console.log(num1 == num2);

//not equal to
console.log("Is num1 is not equal to num2?");
console.log(num1 != num2);

//greater than
console.log("Is num1 is greater than num2 ?");
console.log(num1 > num2)

//less than
console.log("Is num1 is less than num2?");
console.log(num1 < num2);


//greater than or equal to
console.log("Is num1 is grater than or equal to num2?");
console.log(num1 >= num2);

//less than or equal to
console.log("Is num1 is less than or equal to num2?");
console.log(num1 <= num2);

//tests using "and & "or" operator

//using "and"
console.log("Is num1 is equal 15 and num2 is greater than num1?");
console.log(num1 == 15 && num2 > num1 );

//using "or"
console.log("Is num1 is equal to 12 or num1 is equal to 15?");
console.log(num1 == 12 || num1 == 15);

console.log("Is num1 is  equal to 12 or num1 is not equal to 15?");
console.log(num1 == 12 || num1 != 15);

//test whether an item is include in array
console.log("Is  reddish included in my  vegetables array?");
console.log(vegetables.includes("raddish"));

console.log("Is raddish is not include in vegetables array?");
console.log(vegetables.includes("raddish"));