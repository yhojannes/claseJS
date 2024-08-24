let number1
let number2
let number3

number1 = parseInt(prompt("digita numero 1"))
number2 = parseInt(prompt("digita numero 2"))
number3 = parseInt(prompt("digita numero 3"))

if(number1 == number2 && number2 == number3 && number3 == number1){
    console.log("los numeros son iguales");
}else if(number1 > number2){
    console.log("El numero 1 es el mayor entre los tres");
}else if(number2 > number3){
    console.log("El numero 2 es el mayor entre los tres");
}else if(number3 > number1){
    console.log("El numero 3 es el mayor entre los tres");
} 