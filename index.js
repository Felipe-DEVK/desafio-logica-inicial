const nomeDoHeroi = "Felipe";

let xpDoHeroi = 8750;



if (xpDoHeroi <= 1000) {
    console.log("Ferro")
} else if (xpDoHeroi <= 2000){
    console.log("Bronze")
} else if (xpDoHeroi <= 5000){
    console.log("Prata")
} else if (xpDoHeroi <= 7000){
    console.log("Ouro")
} else if (xpDoHeroi <= 8000){
    console.log("Platina")
} else if(xpDoHeroi <= 9000){
    console.log("Ascendente")
} else if (xpDoHeroi <= 10000){
    console.log("Imortal")
} else {
    console.log("Radiante")
}

console.log("O Herói de nome " + nomeDoHeroi + " Está no nivel " + xpDoHeroi)
