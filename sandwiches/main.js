function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy Sandwich\n");
}
makeSandwich("Mushrooms", "Boil Egg", "Cheese");
makeSandwich("Bread", "Butter");
makeSandwich("Mushrooms", "Boil Egg", "Cheese", "Bread", "Butter", "Chilli", "cucumber");
