document.writeln("┌───────────────────────────────────────┐<br>");
document.writeln("│         TABALA DE MULTIPLICAR         │<br>");
document.writeln("└───────────────────────────────────────┘<br>");

//Datos de entrada

let nro = parseInt(prompt("digite nro"))

for(let i=1; i<11; i++){
    document.writeln(`${i} * ${nro} = ${i*nro}<br>`);
}

//Digitar 10 numeros y contar cuantos son positivos y cuantos son negativos