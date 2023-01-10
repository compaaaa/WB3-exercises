function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);
}

let myName = "Bob";
let myAddress = "123 Elm St";
let myCity = "Atlanta";
let myState = "Georgia";
let myZip = 30033;

displayMailingLabel(myName, myAddress, myCity, myState, myZip);

function addNumbers(num1, num2) {
    let answer = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + answer)
}

addNumbers(30, 56);

function displayReceipt(totalDue, amountPaid){
    console.log("TOTAL DUE: $" + totalDue);
    console.log("AMOUNT PAID: $" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
        console.log("OWED: $" + owed);
    }else{
        let credit = Math.abs(totalDue - amountPaid); //NEVER NEGATIVE
        console.log("CREDIT BALANCE: $" + credit);
    }
}

displayReceipt(50, 200);