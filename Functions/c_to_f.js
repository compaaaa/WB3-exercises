function convertCtoF(randomTemp) {
    return ( randomTemp * 9/5) + 32;
}

let currentTemp = 97;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(fahrenheitTemp)