
//Exercice 1
let note= 7;
if (note>= 16) {
    console.log("très bien");
} else if (note>= 10) {
        console.log("Validé");

} else {
    console.log("Non validé")
}
//Exercice 2
let temerature = 20 ;
if (temerature <10){
    console.log("Froid")
}else if (temerature<25){
    console.log("Doux")
}else {
    console.log("Chaud")
}
//Exercice 3 
const prompt = require("prompt-sync")();
let not= prompt("la note:");
let presence= prompt("presence:");

if (not == 14 && presence == 90 ){
    console.log("valide");
}else{
    console.log("Non validé");
}