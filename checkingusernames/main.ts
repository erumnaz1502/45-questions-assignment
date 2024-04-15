let current_users = ["Eva", "Erha", "Armish", "Ayira", "Amiyra"];
let new_users = ["Armaan","Eva", "amiyra", "Fareha", "Fariya"];

new_users.forEach(new_one_user =>{
   //condition username already exist 
 let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());   
    if(our_condition){
        //different message using if else statement
        console.log(`Sorry ${new_one_user} is alerady taken.`);
    }else{
        console.log(`This Username ${new_one_user} is available.`);
    }
})