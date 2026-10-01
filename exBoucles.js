//Exercice 1
for(p=0;p<=20;p++){
    if(p%2==0){
        console.log(p);
    }
}
//Exercice 2
let somme =0;
for (let i=0;i<=10;i++){
    somme +=i;
}
console.log( "total is:",somme);
//Exercice 3
let computer =0;
let sum  =0;

for (let c=1;c<=20;c++){
    if (c%2==0){
        computer++;
        sum+=c;
    }
    
}

console.log("nombre dr pairs:"+computer);
console.log("somme des pairs:"+ sum);
