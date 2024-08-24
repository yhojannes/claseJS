//Declarar Variables
let dia

//Datos de entrada
dia = 1

if(dia >=1 && dia <=7){ //Validar que el numero este entre 1 y 7
    if(dia == 1){
         console.log('Lunes');
    }else if(dia == 2){
        console.log('Martes');
    }else if(dia == 3){
        console.log('Miércoles');
    }else if(dia == 4){
        console.log('Jueves');
    }else if(dia == 5){
        console.log('Viernes');
    }else if(dia == 6){
        console.log('Sabado');
    }else{
        console.log('Domingo');
    }
}else{
    console.log('Concentradito... no sea /&%%&/');
}