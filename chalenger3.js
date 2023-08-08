let pointsDolphins1 = Math.round(Math.random() * 100);
let pointsDolphins2 = Math.round(Math.random() * 100);
let pointsDolphins3 = Math.round(Math.random() * 100);

let pointsKoalas1 = Math.round(Math.random() * 100);
let pointsKoalas2 = Math.round(Math.random() * 100);
let pointsKoalas3 = Math.round(Math.random() * 100);


let scoreDolphins = (pointsDolphins1 + pointsDolphins2 + pointsDolphins3) / 3;
let scoreKoalas = (pointsKoalas1 + pointsKoalas2 + pointsKoalas3) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 50) {
    console.log("Dolphins venceram!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 50) {
    console.log("Koalas venceram!") 
} else if (scoreDolphins === scoreKoalas && scoreDolphins >=50 && scoreKoalas >= 50) {
    console.log("Todo mundo venceu!")
} else {
    console.log("Ninguém venceu..")
}