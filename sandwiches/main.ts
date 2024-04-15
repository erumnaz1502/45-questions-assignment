function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy Sandwich\n");

}
 
makeSandwich("Mushrooms", "Boil Egg" , "Cheese");

makeSandwich("Bread" , "Butter");

makeSandwich("Mushrooms", "Boil Egg" , "Cheese" , "Bread" , "Butter" , "Chilli" , "cucumber");