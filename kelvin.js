const kelvin = 294; // 294 kelvin temperature is assigned to variable kelvin.
const celsius = kelvin - 273; // celsius = kelvin - 273
let fahrenheit = celsius * (9/5) + 32; // celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit); // used .floor() method from math libraray to round the fahrenheit temperature and reassign the value in fahrenheit variable.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
