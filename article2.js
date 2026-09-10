const prompt =require("prompt-sync")();
let articl = prompt("wich article do you want  ?");

let price= prompt("how much the price ?");

let quantity= prompt("how much do you want ?");

let total=price*quantity;

console.log("total is",total,"for",quantity,articl);