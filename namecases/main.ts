let personName: string = "Kim Taehyung";
console.log(personName.toUpperCase()); //print uppercase
console.log(personName.toLowerCase()); //print lowercase
console.log(personName.replace(/\b\w/g , c => c.toUpperCase())); //print titlecase