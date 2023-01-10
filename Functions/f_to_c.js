function convertFtoC(randomTemp) {
    return (5 / 9) * (randomTemp - 32);
}

let currentTemp = 180;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp)