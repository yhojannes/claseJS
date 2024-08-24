console.log("┌───────────────────────────────────────┐<br>");
console.log("│           CONTATAR NRO + Y -          │<br>");
console.log("└───────────────────────────────────────┘<br>");

//Variables
let nro, i
let contPositivos=0, contNegativos=0

//Datos de esntrada van en el ciclo
for(i=1; i<11; i++){
    nro=parseInt(prompt(`Digite el numero ${i}`))
    if(nro >0){
        contPositivos = contPositivos + 1
    }else{
        contNegativos = contNegativos + 1
    }
}

console.log(`La cantidad de Positivos es -> ${contPositivos}`);
console.log(`La cantidad de Negativos es -> ${contNegativos}`);