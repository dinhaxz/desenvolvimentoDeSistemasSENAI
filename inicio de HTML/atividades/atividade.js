let p = parseFloat(prompt ("informe o peso dos peixes kg "))
let e = 0; 
let m = 0;
if (p > 50){
    e = p - 50;
    m = e * 4;
}
console.log ("excesso: " + e + "kg");
console.log ("multa: R$ " + m.toFixed(2));

