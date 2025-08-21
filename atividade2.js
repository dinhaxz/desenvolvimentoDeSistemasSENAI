let time1 = prompt ("nome do primeiro time:")
let gols1 = parseInt(prompt("gols do " + time1 + ":"));
let time2 = prompt ("nome do segundo time:");
let gols2 = parseInt(prompt("gols do " + time2 + ":"));
if(gols1 > gols2) {
    console.log ("vencedor " + time1);
} else  if (gols2 > gols1 ) {
    console.log ("vencedor " + time2);
} else {
    console.log ("EMPATE")
}