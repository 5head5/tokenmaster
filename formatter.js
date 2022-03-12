//open top candle "wick"
//high top candle "Block" 
//low bottom candle "block"
//close bottom canlde "wick"

const dataframe = require("./DataFrame.json");
const data = require("./data.json");

/*
console.log("Data[1]: ");
console.log(data[1]);
*/
console.log("Block: " + 375 + " Open Top:" + data[375].open);

for (let i = 0; i < data.length; i++) {
    console.log("Block: " + i + " Open Top:" + data[i].open);




}