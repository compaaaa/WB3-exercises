let startDate =  new Date("July 23, 2021");
let endDate = new Date ("November 15, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);

console.log("The number of days between dates is " + numDays);