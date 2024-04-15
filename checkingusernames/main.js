var current_users = ["Eva", "Erha", "Armish", "Ayira", "Amiyra"];
var new_users = ["Armaan", "Eva", "amiyra", "Fareha", "Fariya"];
new_users.forEach(function (new_one_user) {
    //condition username already exist 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        //different message using if else statement
        console.log("Sorry ".concat(new_one_user, " is alerady taken."));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available."));
    }
});
