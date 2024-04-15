function createCar(manfacturer , model , ...options){

let car = {
manfacturer: manfacturer,
model: model

};

//aditional options
options.forEach(option => {
    let [key , value] = option.split(":");
    car[key.trim()] = value.trim(); 
});
return car;
}
let myCar = createCar("toyota" , "Corrola" ,  "color: Navy Blue" , "sunroof: true");
console.log(myCar);