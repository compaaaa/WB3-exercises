let message = "Our corporate offices are located in Dallas";
let newMessage = message.replace("Dallas", "Austin");
console.log(newMessage);

let newMessagewithExpressions = message.replace(/DALLAS/g, "Austin");
console.log(newMessage);