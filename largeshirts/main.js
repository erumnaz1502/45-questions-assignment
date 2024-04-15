function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//calling a function
make_shirt();
make_shirt("Medium");
//calling a function with different message
make_shirt("small", "I love python");
