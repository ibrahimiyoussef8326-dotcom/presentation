//2.1
const prompt=require("prompt-sync")();

let age =prompt("how old are you:");

if(age>=18){
    console.log(" vous etes majeur")
}else {
    console.log("vous etes mineur")
}
let nombre=prompt("the number:");
if (nombre>0){
    console.log("positive")
}else if(nombre<0){
    console.log("negative")
}else{
    console.log("nule")
}


//2.2
 let member = false ;
 let invitation = true;

let mem=String (prompt("you're a member?"));

if (mem =='yes'){
     member = true ;
}else{
    member = false;
}
let inv=String(prompt("you have an invitation?"));

if (inv =='yes'){
     invitation = true ;
}else{
    invitation = false;
}


if (member==true || invitation==true){
    console.log("Bienvenue");
}else{
    console.log("Vous ne pouvez pas entrer.");
}


let a=5 ;
let b = 13;
if (a<b) {
    console.log(b);
} else if (a>b){
    console.log(b);
}else{
    console.log("the same.")
}

//2.3

let score=15;

if (score>=16) {
    console.log("Excellent")
} else if (score>=15) {
    console.log("Réussi")
} else {
    console.log("Échec");
} 