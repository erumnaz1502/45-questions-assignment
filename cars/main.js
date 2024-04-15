function createCar(manfacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manfacturer: manfacturer,
        model: model
    };
    //aditional options
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var myCar = createCar("toyota", "Corrola", "color: Navy Blue", "sunroof: true");
console.log(myCar);
