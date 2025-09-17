// Desafio Classificador de Heroi
// Criar váriável para herói, xp e nivel de xp

let nickName = "Programador sem Medo"
let xpHeroi = 9005
let nivelHeroi

//Criar os niveis do Heroi em XP

if(xpHeroi < 1000) {
    niveHeroi = "Ferro"
} else if(xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if(xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if(xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if(xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if(xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if(xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if(xpHeroi >= 10001) {
    nivelHeroi = "Radiante"
}

//Saída

console.log("O Herói de Nome " + nickName + " está no nível de " + nivelHeroi + " com um total de " + xpHeroi + " XPs")