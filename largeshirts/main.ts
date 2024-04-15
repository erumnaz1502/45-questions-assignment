function make_shirt (size = "Large", printMessage = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}

//calling a function
make_shirt()
make_shirt("Medium");
//calling a function with different message
make_shirt("small", "I love python");