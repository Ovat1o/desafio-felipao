let nomeHeroi = "Sapo"
let xp = 10000
let nivel = ""

if(xp <= 1000) {
    nivel = "Bronze"    //nas instruções, ferro estava abaixo de bronze, eu corrigi
} else if(xp <= 2000){
    nivel = "Ferro"
} else if(xp <= 5000){
    nivel = "Prata"
} else if(xp <= 7000){
    nivel = "Ouro"
} else if(xp <= 8000){
    nivel = "Platina"
} else if(xp <= 9000){
    nivel = "Ascendente"
} else if(xp <= 10000){
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}
//Saída
console.log("O herói " + nomeHeroi + " está no nível " + nivel + ".")