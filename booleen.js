// --- Opérateurs de comparaison ---
let score = 8;
let seuil = 10;
console.log(score > seuil);   // Changez score à 8 et relancez
console.log(score === seuil);
console.log(score !== seuil);

// --- Stocker un résultat ---
let estValide = score >= seuil;
console.log(estValide); // Changez score à 8 et relancez

// --- Opérateurs logiques ---
let inscrit = true;
let paiement = false;
let acces = score >= seuil && inscrit === true;
console.log(acces); // Changez inscrit à false et relancez

let entree = inscrit === true || paiement === true;
console.log(entree); // Changez les deux à false et relancez
//&&=et
//||=ou
//!=non
//== wax egal
//!= wax ma egalx
//=== equal value and type
//!== not equal and type

